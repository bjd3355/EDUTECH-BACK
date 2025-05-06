import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { SlotService } from './slot.service';
import { CreateSlotDto } from './DTO/create-slot.dto';
import { UpdateSlotDto } from './DTO/update-slot.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../users/users.entity';

@Controller('slots')
@UseGuards(JwtAuthGuard, RolesGuard)
export class SlotController {
  constructor(private readonly svc: SlotService) {}

  @Post() @Roles(Role.ADMIN)
  create(@Body() dto: CreateSlotDto) {
    return this.svc.create(dto);
  }

  @Get() @Roles(Role.ADMIN, Role.TEACHER, Role.STUDENT)
  findAll(@Query() q: any) {
    return this.svc.findAll(q);
  }

  @Get(':id') @Roles(Role.ADMIN, Role.TEACHER, Role.STUDENT)
  findOne(@Param('id') id: number) {
    return this.svc.findOne(id);
  }

  @Put(':id') @Roles(Role.ADMIN)
  update(@Param('id') id: number, @Body() dto: UpdateSlotDto) {
    return this.svc.update(id, dto);
  }

  @Delete(':id') @Roles(Role.ADMIN)
  remove(@Param('id') id: number) {
    return this.svc.remove(id);
  }
}
