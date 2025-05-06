import { IsString, IsArray, ArrayMinSize, ValidateNested, IsOptional, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

class TimeSlot {
  @IsString()
  start: string;

  @IsString()
  end: string;
}

export class CreateSlotDto {
  @IsString()
  className: string;

  @IsString()
  day: string;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => TimeSlot)
  timeslots: TimeSlot[];

  @IsOptional()
  @IsBoolean()
  isBlocked?: boolean;
}
