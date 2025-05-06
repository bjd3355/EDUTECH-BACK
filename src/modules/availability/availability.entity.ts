import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Teacher } from '../teacher/teacher.entity';

export type AvailabilityType = 'available' | 'blocked';

@Entity('professor_availabilities')
export class Availability {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Teacher, { eager: true, nullable: false })
  professeur: Teacher;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'time' })
  startTime: string;

  @Column({ type: 'time' })
  endTime: string;

  @Column({ type: 'enum', enum: ['available','blocked'], default: 'available' })
  type: AvailabilityType;
}
