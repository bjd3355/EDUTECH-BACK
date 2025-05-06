// src/modules/qcm/qcm.service.ts
import { Injectable } from "@nestjs/common";

@Injectable()
export class QcmService {
  findAll() {
    return "Liste des QCM";
  }
}
