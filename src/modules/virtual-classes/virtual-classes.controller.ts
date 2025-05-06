// src/modules/virtual-classes/virtual-classes.controller.ts
import { Controller, Get } from "@nestjs/common";
import { VirtualClassesService } from "./virtual-classes.service";

@Controller("virtual-classes")
export class VirtualClassesController {
  constructor(private readonly virtualClassesService: VirtualClassesService) {}

  @Get()
  findAll() {
    return this.virtualClassesService.findAll();
  }
}
