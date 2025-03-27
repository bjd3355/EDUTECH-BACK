import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UtilisateurService } from '../users/users.service';
import { Utilisateur } from '../users/users.entity';
import * as bcrypt from 'bcrypt';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private utilisateurService: UtilisateurService,
  ) {}

  @Post('register')
  async register(@Body() utilisateurData: Utilisateur) {
    const hashedPassword = await bcrypt.hash(utilisateurData.motDePasse, 10); 
    const utilisateur = await this.utilisateurService.create({
      ...utilisateurData,
      motDePasse: hashedPassword,
    }); 
    return utilisateur; 
  }

  @Post('login')
  async login(@Body() utilisateurData: { nomUtilisateur: string; motDePasse: string }) {
    const utilisateur = await this.authService.validateUser(
      utilisateurData.nomUtilisateur,
      utilisateurData.motDePasse,
    );
    if (!utilisateur) {
      throw new UnauthorizedException('Nom d\'utilisateur ou mot de passe incorrect'); 
    }
    return this.authService.login(utilisateur); 
  }
}