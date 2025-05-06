// src/modules/section/section.module.ts
import { Module }         from '@nestjs/common';
import { TypeOrmModule }  from '@nestjs/typeorm';
import { SectionService } from './section.service';
import { SectionController } from './section.controller';
import { Section }        from './section.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Section])],
  controllers: [SectionController],
  providers: [SectionService],
  exports: [SectionService],
})
export class SectionModule {}
