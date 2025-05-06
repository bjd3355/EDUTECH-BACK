// src/modules/filiere/filiere.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository }    from 'typeorm';
import { Filiere }       from './filiere.entity';

@Injectable()
export class FiliereService {
  constructor(
    @InjectRepository(Filiere)
    private readonly repo: Repository<Filiere>,
  ) {}

  /**
   * Renvoie toutes les filières,
   * ou uniquement celles liées au niveau passé en paramètre.
   */
  async findAll(niveauId?: number): Promise<Filiere[]> {
    const qb = this.repo.createQueryBuilder('filiere');
    if (niveauId) {
      qb.where('filiere.niveau = :niveauId', { niveauId });
    }
    qb.orderBy('filiere.nom', 'ASC');
    return qb.getMany();
  }
}
