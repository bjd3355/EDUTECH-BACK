import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UtilisateurService } from './users.service';
import { Utilisateur } from './users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Utilisateur])], 
  controllers: [UsersController], 
  providers: [UtilisateurService], 
  exports: [UtilisateurService], 
})
export class UsersModule {}