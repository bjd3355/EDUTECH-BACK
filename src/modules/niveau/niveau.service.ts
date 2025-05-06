// src/modules/niveau/niveau.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Niveau } from './niveau.entity';

@Injectable()
export class NiveauService {
  constructor(
    @InjectRepository(Niveau)
    private readonly repo: Repository<Niveau>,
  ) {}

  /** Renvoie tous les niveaux */
  async findAll(): Promise<Niveau[]> {
    return this.repo.find({ order: { nom: 'ASC' } });
  }
}
