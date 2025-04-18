// src/modules/niveau/niveau.service.ts
import { Injectable } from "@nestjs/common";

@Injectable()
export class NiveauService {
  findAll() {
    return "Liste des niveaux";
  }
}
