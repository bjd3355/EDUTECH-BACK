import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Teacher } from '../teacher/teacher.entity';
import { Matiere } from '../matiere/matiere.entity';
import { Schedule } from './schedule.entity';

@Entity('schedule_events')
export class ScheduleEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'time' })
  startTime: string;

  @Column({ type: 'time' })
  endTime: string;

  @Column({ nullable: true })
  room?: string;

  // Assure que le champ professeurId est automatiquement géré par TypeORM
  @ManyToOne(() => Teacher, { eager: true, nullable: false })
  professeur: Teacher;

  @ManyToOne(() => Matiere, { eager: true, nullable: false })
  matiere: Matiere;

  @ManyToOne(() => Schedule, sched => sched.events, { onDelete: 'CASCADE' })
  schedule: Schedule;

  // Ajouter cette ligne pour créer un champ professeurId qui est une clé étrangère
  @Column({ nullable: false })
  professeurId: number;
}
