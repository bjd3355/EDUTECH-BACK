import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Utilisateur } from './users.entity';

@Injectable()
export class UtilisateurService {
  constructor(
    @InjectRepository(Utilisateur)
    private utilisateurRepository: Repository<Utilisateur>,
  ) {}

  async findByNomUtilisateur(nomUtilisateur: string): Promise<Utilisateur | null> {
    return this.utilisateurRepository.findOne({ where: { nomUtilisateur } }); 
  }

  async create(utilisateurData: Utilisateur): Promise<Utilisateur> {
    const utilisateur = this.utilisateurRepository.create(utilisateurData); 
    return this.utilisateurRepository.save(utilisateur); 
  }
}