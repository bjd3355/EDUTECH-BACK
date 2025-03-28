// src/modules/teacher/teacher.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Filiere } from '../filiere/filiere.entity';

export enum TeacherStatus {
  AVAILABLE = 'AVAILABLE',
  UNAVAILABLE = 'UNAVAILABLE',
}

@Entity('teachers')
export class Teacher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;
  
  @Column()
  lastName: string;
  
  @Column({ unique: true })
  email: string;
  
  @Column({ nullable: true })
  password: string; // Initialement vide
  
  @ManyToOne(() => Filiere, filiere => filiere.teachers, { eager: true, nullable: true })
  filiere: Filiere;
  
  @Column("simple-array", { nullable: true })
  classes: string[];
  
  @Column("simple-array", { nullable: true })
  modules: string[];
  
  @Column({
    type: 'enum',
    enum: TeacherStatus,
    default: TeacherStatus.AVAILABLE,
  })
  status: TeacherStatus;
}
