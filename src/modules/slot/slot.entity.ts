import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('class_slots')
export class Slot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  className: string;

  @Column()
  day: string; // 'Lundi', etc.

  @Column('simple-json')
  timeslots: { start: string; end: string }[];

  @Column({ default: false })
  isBlocked: boolean;
}
