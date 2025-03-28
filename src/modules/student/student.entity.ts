// src/modules/student/student.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Filiere } from '../filiere/filiere.entity';
import { Section } from '../section/section.entity';

@Entity('students')
export class Student {
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
  
  @Column({ nullable: true })
  classe: string;
  
  @Column({ nullable: true })
  niveau: string;
  
  @ManyToOne(() => Section, { eager: true, nullable: true })
  section: Section;
  
  @ManyToOne(() => Filiere, filiere => filiere.students, { eager: true, nullable: true })
  filiere: Filiere;
}
