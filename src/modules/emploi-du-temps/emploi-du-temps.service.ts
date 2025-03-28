// src/modules/emploi-du-temps/emploi-du-temps.service.ts
import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmploiDuTemps } from './emploi-du-temps.entity';
import { CreateEmploiDuTempsDto } from './DTO/create-emploi-du-temps.dto';
import { UpdateEmploiDuTempsDto } from './DTO/update-emploi-du-temps.dto';
import { GoogleAgendaService } from '../../google-agenda/google-agenda.service';

@Injectable()
export class EmploiDuTempsService {
  constructor(
    @InjectRepository(EmploiDuTemps)
    private emploiRepo: Repository<EmploiDuTemps>,
    private googleAgendaService: GoogleAgendaService,
  ) {}

  async create(createDto: CreateEmploiDuTempsDto): Promise<EmploiDuTemps> {
    // Vérification de conflit pour le même professeur
    const conflit = await this.emploiRepo.createQueryBuilder('emploi')
      .where('emploi.professeur = :professeur', { professeur: createDto.professeur })
      .andWhere('emploi.date = :date', { date: createDto.date })
      .andWhere('(emploi.heureDebut < :heureFin AND emploi.heureFin > :heureDebut)', { 
        heureDebut: createDto.heureDebut, 
        heureFin: createDto.heureFin 
      })
      .getOne();

    if (conflit) {
      throw new BadRequestException('Conflit de planning pour ce professeur.');
    }

    // Transformation du DTO pour convertir l'ID en objet partiel pour la relation "professeur"
    const emploiData: Partial<EmploiDuTemps> = {
      ...createDto,
      professeur: { id: createDto.professeur } as any,
      filiere: createDto.filiere ? ({ id: createDto.filiere } as any) : undefined,
      matiere: createDto.matiere ? ({ id: createDto.matiere } as any) : undefined,
      niveau: createDto.niveau ? ({ id: createDto.niveau } as any) : undefined,
      section: createDto.section ? ({ id: createDto.section } as any) : undefined,
    };

    const emploi = this.emploiRepo.create(emploiData);
    const emploiCree = await this.emploiRepo.save(emploi);

    // Synchronisation avec Google Agenda
    await this.googleAgendaService.createOrUpdateEvent(emploiCree);

    return emploiCree;
  }

  async findAll(filters?: any): Promise<EmploiDuTemps[]> {
    const query = this.emploiRepo.createQueryBuilder('emploi');
    if (filters.date) {
      query.andWhere('emploi.date = :date', { date: filters.date });
    }
    if (filters.professeur) {
      query.andWhere('emploi.professeur = :professeur', { professeur: filters.professeur });
    }
    if (filters.module) {
      query.andWhere('emploi.module = :module', { module: filters.module });
    }
    return await query.getMany();
  }

  async findOne(id: number): Promise<EmploiDuTemps> {
    const emploi = await this.emploiRepo.findOne({ where: { id } });
    if (!emploi) {
      throw new NotFoundException("Emploi du temps non trouvé");
    }
    return emploi;
  }

  async update(id: number, updateDto: UpdateEmploiDuTempsDto): Promise<EmploiDuTemps> {
    const emploi = await this.findOne(id);
    if (updateDto.date || updateDto.heureDebut || updateDto.heureFin) {
      const nouvelleDate = updateDto.date || emploi.date;
      const nouvelleHeureDebut = updateDto.heureDebut || emploi.heureDebut;
      const nouvelleHeureFin = updateDto.heureFin || emploi.heureFin;

      const conflit = await this.emploiRepo.createQueryBuilder('emploi')
        .where('emploi.professeur = :professeur', { professeur: emploi.professeur.id })
        .andWhere('emploi.date = :date', { date: nouvelleDate })
        .andWhere('emploi.id != :id', { id })
        .andWhere('(emploi.heureDebut < :heureFin AND emploi.heureFin > :heureDebut)', {
          heureDebut: nouvelleHeureDebut,
          heureFin: nouvelleHeureFin,
        })
        .getOne();

      if (conflit) {
        throw new BadRequestException('Conflit de planning pour ce professeur.');
      }
    }

    if (updateDto.professeur) {
      updateDto = { ...updateDto, professeur: { id: updateDto.professeur } as any };
    }

    const emploiModifie = Object.assign(emploi, updateDto);
    const emploiSauve = await this.emploiRepo.save(emploiModifie);

    await this.googleAgendaService.createOrUpdateEvent(emploiSauve);

    return emploiSauve;
  }

  async remove(id: number): Promise<void> {
    const emploi = await this.findOne(id);
    await this.emploiRepo.remove(emploi);
    await this.googleAgendaService.deleteEvent(emploi);
  }
}
