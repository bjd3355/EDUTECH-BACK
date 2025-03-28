// src/modules/filiere/filiere.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { EmploiDuTemps } from '../emploi-du-temps/emploi-du-temps.entity';
import { Teacher } from '../teacher/teacher.entity';
import { Student } from '../student/student.entity';
import { Niveau } from '../niveau/niveau.entity';

@Entity('filieres')
export class Filiere {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @OneToMany(() => EmploiDuTemps, emploi => emploi.filiere)
  emploisDuTemps: EmploiDuTemps[];

  @OneToMany(() => Teacher, teacher => teacher.filiere)
  teachers: Teacher[];

  @OneToMany(() => Student, student => student.filiere)
  students: Student[];

  @OneToMany(() => Niveau, niveau => niveau.filiere)
  niveaux: Niveau[];
}
