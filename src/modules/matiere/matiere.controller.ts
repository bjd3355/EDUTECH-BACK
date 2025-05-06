// src/modules/matiere/matiere.controller.ts
import { Controller, Get } from "@nestjs/common";
import { MatiereService } from "./matiere.service";

@Controller("matieres")
export class MatiereController {
  constructor(private readonly matiereService: MatiereService) {}

  @Get()
  findAll() {
    return this.matiereService.findAll();
  }
}
