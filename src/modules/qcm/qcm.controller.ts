// src/modules/qcm/qcm.controller.ts
import { Controller, Get } from "@nestjs/common";
import { QcmService } from "./qcm.service";

@Controller("qcm")
export class QcmController {
  constructor(private readonly qcmService: QcmService) {}

  @Get()
  findAll() {
    return this.qcmService.findAll();
  }
}
