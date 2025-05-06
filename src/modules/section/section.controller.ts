// src/modules/section/section.controller.ts
import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard }   from '../auth/jwt-auth.guard';
import { RolesGuard }     from '../auth/roles.guard';
import { Roles }          from '../auth/roles.decorator';
import { Role }           from '../users/users.entity';
import { SectionService } from './section.service';
import { Section }        from './section.entity';

@Controller('sections')
@UseGuards(JwtAuthGuard, RolesGuard)
export class SectionController {
  constructor(private readonly svc: SectionService) {}

  @Get()
  @Roles(Role.ADMIN, Role.TEACHER, Role.STUDENT)
  findAll(@Query('filiereId') filiereId?: string): Promise<Section[]> {
    return this.svc.findAll(filiereId ? +filiereId : undefined);
  }
}
