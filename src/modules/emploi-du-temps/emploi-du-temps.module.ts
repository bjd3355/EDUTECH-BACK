// src/modules/emploi-du-temps/emploi-du-temps.module.ts
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EmploiDuTemps } from "./emploi-du-temps.entity";
import { EmploiDuTempsService } from "./emploi-du-temps.service";
import { EmploiDuTempsController } from "./emploi-du-temps.controller";
import { GoogleAgendaService } from "../../google-agenda/google-agenda.service";

@Module({
  imports: [TypeOrmModule.forFeature([EmploiDuTemps])],
  providers: [EmploiDuTempsService, GoogleAgendaService],
  controllers: [EmploiDuTempsController],
})
export class EmploiDuTempsModule {}
