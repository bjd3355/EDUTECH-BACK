import {
  IsArray,
  ArrayMinSize,
  ValidateNested,
  IsDateString,
  IsString,
  IsInt,
  IsOptional,
  IsBoolean,
} from 'class-validator';
import { Type } from 'class-transformer';

class ScheduleEventDto {
  @IsDateString()
  date: string;

  @IsString()
  startTime: string;

  @IsString()
  endTime: string;

  @IsInt()
  matiereId: number;

  @IsInt()
  professeurId: number;

  @IsOptional()
  @IsString()
  room?: string;
}

export class CreateScheduleDto {
  @IsDateString()
  weekStart: string;

  @IsDateString()
  weekEnd: string;

  @IsString()
  weekLabel: string;

  @IsInt()
  niveauId: number;

  @IsInt()
  filiereId: number;

  @IsInt()
  sectionId: number;

  @IsOptional()
  @IsString()
  note?: string;

  @IsOptional()
  @IsBoolean()
  published?: boolean;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ScheduleEventDto)
  events: ScheduleEventDto[];
}
