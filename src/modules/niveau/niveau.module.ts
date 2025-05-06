// src/modules/niveau/niveau.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NiveauController } from './niveau.controller';
import { NiveauService } from './niveau.service';
import { Niveau } from './niveau.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Niveau])],   // ← ajoutez l’entité
  controllers: [NiveauController],
  providers: [NiveauService],
  exports: [NiveauService],
})
export class NiveauModule {}
