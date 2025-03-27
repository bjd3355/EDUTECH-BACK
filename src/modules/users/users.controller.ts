import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from '../../middleware/roles.decorator';
import { RolesGuard } from '../../middleware/roles.guard';
import { RoleUtilisateur } from './users.entity';

@Controller('users')
@UseGuards(RolesGuard) 
export class UsersController {
  @Get('admin')
  @Roles(RoleUtilisateur.ADMINISTRATEUR)
  findAdminData() {
    return { message: 'Données réservées aux administrateurs' };
  }

  @Get('professeur')
  @Roles(RoleUtilisateur.PROFESSEUR) 
  findProfesseurData() {
    return { message: 'Données réservées aux professeurs' };
  }

  @Get('etudiant')
  @Roles(RoleUtilisateur.ETUDIANT) 
  findEtudiantData() {
    return { message: 'Données réservées aux étudiants' };
  }

  @Get('all')
  @Roles(RoleUtilisateur.ADMINISTRATEUR, RoleUtilisateur.PROFESSEUR, RoleUtilisateur.ETUDIANT)  
  findAllData() {
    return { message: 'Données accessibles à tous les rôles' };
  }
}