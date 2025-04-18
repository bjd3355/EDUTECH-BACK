// src/modules/section/section.service.ts
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Section } from "./section.entity"; // <-- il te faut un entity Section !

@Injectable()
export class SectionService {
  constructor(
    @InjectRepository(Section)
    private sectionRepo: Repository<Section>,
  ) {}

  async findAll(): Promise<Section[]> {
    return this.sectionRepo.find();
  }
}
