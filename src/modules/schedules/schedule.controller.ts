import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { CreateScheduleDto } from './DTO/CreateScheduleDto';
import { UpdateScheduleDto } from './DTO/UpdateScheduleDto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../users/users.entity';

@Controller('schedules')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ScheduleController {
  constructor(private readonly svc: ScheduleService) {}

  @Post()
  @Roles(Role.ADMIN)
  create(@Body() dto: CreateScheduleDto) {
    return this.svc.create(dto);
  }

  @Get()
  @Roles(Role.ADMIN, Role.TEACHER, Role.STUDENT)
  findAll(@Query() filters: any) {
    return this.svc.findAll(filters);
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.TEACHER, Role.STUDENT)
  findOne(@Param('id') id: number) {
    return this.svc.findOne(id);
  }

  @Put(':id')
  @Roles(Role.ADMIN)
  update(@Param('id') id: number, @Body() dto: UpdateScheduleDto) {
    return this.svc.update(id, dto);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  remove(@Param('id') id: number) {
    return this.svc.remove(id);
  }
}
