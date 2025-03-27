import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Utilisateur } from '../users/users.entity';
import { UtilisateurService } from '../users/users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Utilisateur]), 
    JwtModule.register({
      secret: 'edutech', 
      signOptions: { expiresIn: '1h' }, 
    }),
  ],
  providers: [AuthService, UtilisateurService], 
  controllers: [AuthController], 
  exports: [JwtModule], 
})
export class AuthModule {}