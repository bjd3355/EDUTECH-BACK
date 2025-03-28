// src/modules/niveau/niveau.controller.ts
import { Controller, Get } from '@nestjs/common';
import { NiveauService } from './niveau.service';

@Controller('niveaux')
export class NiveauController {
  constructor(private readonly niveauService: NiveauService) {}

  @Get()
  findAll() {
    return this.niveauService.findAll();
  }
}
