import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { AvailabilityService } from './availability.service';
import { CreateAvailabilityDto } from './DTO/create-availability.dto';
import { UpdateAvailabilityDto } from './DTO/update-availability.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../users/users.entity';

@Controller('availabilities')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AvailabilityController {
  constructor(private readonly svc: AvailabilityService) {}

  @Post() @Roles(Role.ADMIN, Role.TEACHER)
  create(@Body() dto: CreateAvailabilityDto) {
    return this.svc.create(dto);
  }

  @Get() @Roles(Role.ADMIN, Role.TEACHER)
  findAll(@Query() q: any) {
    return this.svc.findAll(q);
  }

  @Get(':id') @Roles(Role.ADMIN, Role.TEACHER)
  findOne(@Param('id') id: number) {
    return this.svc.findOne(id);
  }

  @Put(':id') @Roles(Role.ADMIN, Role.TEACHER)
  update(@Param('id') id: number, @Body() dto: UpdateAvailabilityDto) {
    return this.svc.update(id, dto);
  }

  @Delete(':id') @Roles(Role.ADMIN, Role.TEACHER)
  remove(@Param('id') id: number) {
    return this.svc.remove(id);
  }
}
