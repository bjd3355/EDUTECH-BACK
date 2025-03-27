import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UtilisateurService } from '../users/users.service';
import { Utilisateur } from '../users/users.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private utilisateurService: UtilisateurService,
    private jwtService: JwtService,
  ) {}

  async validateUser(nomUtilisateur: string, motDePasse: string): Promise<Utilisateur | null> {
    const utilisateur = await this.utilisateurService.findByNomUtilisateur(nomUtilisateur);
    if (!utilisateur) {
      return null; 
    }

    const isPasswordValid = await bcrypt.compare(motDePasse, utilisateur.motDePasse);
    if (!isPasswordValid) {
      return null; 
    }

    return utilisateur; 
  }

  async login(utilisateur: Utilisateur) {
    const payload = { 
      nomUtilisateur: utilisateur.nomUtilisateur, 
      sub: utilisateur.id, 
      role: utilisateur.role 
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}