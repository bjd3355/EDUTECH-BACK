// src/modules/cours/cours.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class CoursService {
  findAll() {
    return "Liste des cours";
  }
}
