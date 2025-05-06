import { IsDateString, IsEnum, IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateAvailabilityDto {
  @IsInt()
  professeurId: number;

  @IsDateString()
  date: string;

  @IsNotEmpty()
  startTime: string;

  @IsNotEmpty()
  endTime: string;

  @IsEnum(['available', 'blocked'])
  type: 'available' | 'blocked';
}
