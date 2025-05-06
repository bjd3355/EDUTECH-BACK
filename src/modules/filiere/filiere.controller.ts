// src/modules/filiere/filiere.controller.ts
import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard }   from '../auth/jwt-auth.guard';
import { RolesGuard }     from '../auth/roles.guard';
import { Roles }          from '../auth/roles.decorator';
import { Role }           from '../users/users.entity';
import { FiliereService } from './filiere.service';
import { Filiere }        from './filiere.entity';

@Controller('filieres')
@UseGuards(JwtAuthGuard, RolesGuard)
export class FiliereController {
  constructor(private readonly svc: FiliereService) {}

  @Get()
  @Roles(Role.ADMIN, Role.TEACHER, Role.STUDENT)
  findAll(@Query('niveauId') niveauId?: string): Promise<Filiere[]> {
    return this.svc.findAll(niveauId ? +niveauId : undefined);
  }
}
