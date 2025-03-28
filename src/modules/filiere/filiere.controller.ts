// src/modules/filiere/filiere.controller.ts
import { Controller, Get } from '@nestjs/common';
import { FiliereService } from './filiere.service';

@Controller('filieres')
export class FiliereController {
  constructor(private readonly filiereService: FiliereService) {}

  @Get()
  findAll() {
    return this.filiereService.findAll();
  }
}
