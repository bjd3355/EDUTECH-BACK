// src/modules/filiere/filiere.service.ts
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Filiere } from './filiere.entity';

@Injectable()
export class FiliereService {
  constructor(
    @InjectRepository(Filiere)
    private filiereRepo: Repository<Filiere>,
  ) {}

  async findAll(): Promise<Filiere[]> {
    return this.filiereRepo.find();
  }
}
