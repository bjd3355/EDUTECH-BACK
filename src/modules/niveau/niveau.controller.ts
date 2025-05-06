// src/modules/niveau/niveau.controller.ts
import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard }   from '../auth/roles.guard';
import { Roles }        from '../auth/roles.decorator';
import { Role }         from '../users/users.entity';
import { NiveauService } from './niveau.service';
import { Niveau }       from './niveau.entity';

@Controller('niveaux')
@UseGuards(JwtAuthGuard, RolesGuard)
export class NiveauController {
  constructor(private readonly svc: NiveauService) {}

  @Get()
  @Roles(Role.ADMIN, Role.TEACHER, Role.STUDENT)
  findAll(): Promise<Niveau[]> {
    return this.svc.findAll();
  }
}
