// src/modules/section/section.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository }    from 'typeorm';
import { Section }       from './section.entity';

@Injectable()
export class SectionService {
  constructor(
    @InjectRepository(Section)
    private readonly repo: Repository<Section>,
  ) {}

  /**
   * Renvoie toutes les sections,
   * ou uniquement celles liées à la filière passée en paramètre.
   */
  async findAll(filiereId?: number): Promise<Section[]> {
    const qb = this.repo.createQueryBuilder('section');
    if (filiereId) {
      qb.where('section.filiere = :filiereId', { filiereId });
    }
    qb.orderBy('section.nom', 'ASC');
    return qb.getMany();
  }
}
