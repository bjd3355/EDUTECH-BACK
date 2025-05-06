import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Niveau } from '../niveau/niveau.entity';
import { Filiere } from '../filiere/filiere.entity';
import { Section } from '../section/section.entity';
import { ScheduleEvent } from './event.entity';

@Entity('schedules')
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  weekStart: Date;

  @Column({ type: 'date' })
  weekEnd: Date;

  @Column()
  weekLabel: string;

  @Column({ default: false })
  published: boolean;

  @Column({ nullable: true })
  note?: string;

  @ManyToOne(() => Niveau, { eager: true, nullable: false })
  niveau: Niveau;

  @ManyToOne(() => Filiere, { eager: true, nullable: false })
  filiere: Filiere;

  @ManyToOne(() => Section, { eager: true, nullable: false })
  section: Section;

  @OneToMany(() => ScheduleEvent, evt => evt.schedule, { cascade: true, eager: true })
  events: ScheduleEvent[];
}
