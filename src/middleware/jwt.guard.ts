import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = request.headers['authorization']?.split(' ')[1]; // Récupérer le token JWT

    if (!token) {
      throw new UnauthorizedException('Token manquant');
    }

    try {
      const user = this.jwtService.verify(token); 
      console.log('Utilisateur authentifié :', user); 
      request.user = user; 
      return true;
    } catch (error) {
      throw new UnauthorizedException('Token invalide');
    }
  }
}