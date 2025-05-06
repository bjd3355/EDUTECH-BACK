// src/modules/matiere/matiere.service.ts
import { Injectable } from "@nestjs/common";

@Injectable()
export class MatiereService {
  findAll() {
    return "Liste des matières";
  }
}
