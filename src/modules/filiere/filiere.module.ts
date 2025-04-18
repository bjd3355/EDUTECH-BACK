// src/modules/filiere/filiere.module.ts
import { Module } from "@nestjs/common";
import { FiliereController } from "./filiere.controller";
import { FiliereService } from "./filiere.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Filiere } from "./filiere.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Filiere])],
  controllers: [FiliereController],
  providers: [FiliereService],
  exports: [FiliereService],
})
export class FiliereModule {}
