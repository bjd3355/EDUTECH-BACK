import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursController } from './cours.controller';
import { CoursService } from './cours.service';
import { Cours } from './cours.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cours])], 
  controllers: [CoursController],
  providers: [CoursService],
})
export class CoursModule {}