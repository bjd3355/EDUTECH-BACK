// src/modules/virtual-classes/virtual-classes.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class VirtualClassesService {
  findAll() {
    return "Liste des classes virtuelles";
  }
}
