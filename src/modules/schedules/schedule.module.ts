import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Schedule } from './schedule.entity';
import { ScheduleEvent } from './event.entity';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Schedule, ScheduleEvent])],
  providers: [ScheduleService],
  controllers: [ScheduleController],
})
export class ScheduleModule {}
