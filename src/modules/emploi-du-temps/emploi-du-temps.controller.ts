// src/modules/emploi-du-temps/emploi-du-temps.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { EmploiDuTempsService } from './emploi-du-temps.service';
import { CreateEmploiDuTempsDto } from './DTO/create-emploi-du-temps.dto';
import { UpdateEmploiDuTempsDto } from './DTO/update-emploi-du-temps.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../users/users.entity';

@Controller('emplois-du-temps')
@UseGuards(JwtAuthGuard, RolesGuard)
export class EmploiDuTempsController {
  constructor(private readonly emploiService: EmploiDuTempsService) {}

  // Seul l'admin peut créer, modifier ou supprimer
  @Post()
  @Roles(Role.ADMIN)
  async create(@Body() createDto: CreateEmploiDuTempsDto) {
    return await this.emploiService.create(createDto);
  }

  @Get()
  @Roles(Role.ADMIN, Role.TEACHER, Role.STUDENT)
  async findAll(@Query() query: any) {
    return await this.emploiService.findAll(query);
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.TEACHER, Role.STUDENT)
  async findOne(@Param('id') id: number) {
    return await this.emploiService.findOne(id);
  }

  @Put(':id')
  @Roles(Role.ADMIN)
  async update(@Param('id') id: number, @Body() updateDto: UpdateEmploiDuTempsDto) {
    return await this.emploiService.update(id, updateDto);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  async remove(@Param('id') id: number) {
    return await this.emploiService.remove(id);
  }
}
