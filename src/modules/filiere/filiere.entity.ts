


// src/modules/filiere/filiere.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  OneToMany,
  JoinTable,
} from "typeorm";
import { Teacher } from "../teacher/teacher.entity";
import { Student } from "../student/student.entity";
import { Niveau } from "../niveau/niveau.entity";
import { Classe } from "../classe/classe.entity";
import { Matiere } from "../matiere/matiere.entity";


@Entity("filieres")
export class Filiere {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @ManyToMany(() => Teacher, teacher => teacher.filieres)
  teachers: Teacher[];

  @OneToMany(() => Student, student => student.filiere)
  students: Student[];

  @ManyToMany(() => Niveau, niveau => niveau.filieres)
  @JoinTable({ name: "filiere_niveaux" })
  niveaux: Niveau[];

  @OneToMany(() => Classe, classe => classe.filiere)
  classes: Classe[];

  @OneToMany(() => Matiere, matiere => matiere.classe)
matieres: Matiere[];

}