// src/modules/cours/cours.controller.ts
import { Controller, Get } from '@nestjs/common';
import { CoursService } from './cours.service';

@Controller('cours')
export class CoursController {
  constructor(private readonly coursService: CoursService) {}

  @Get()
  findAll() {
    return this.coursService.findAll();
  }
}
