// src/modules/section/section.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class SectionService {
  findAll() {
    return "Liste des sections";
  }
}
