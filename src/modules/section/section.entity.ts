


// src/modules/section/section.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
} from "typeorm";
import { Niveau } from "../niveau/niveau.entity";
import { Matiere } from "../matiere/matiere.entity";
import { Classe } from "../classe/classe.entity";
import { Student } from "../student/student.entity";


@Entity("sections")
export class Section {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @ManyToMany(() => Niveau, niveau => niveau.sections)
  @JoinTable({ name: "section_niveaux" })
  niveaux: Niveau[];

  @OneToMany(() => Matiere, matiere => matiere.section)
  matieres: Matiere[];

  @OneToMany(() => Classe, classe => classe.section)
  classes: Classe[];  

  @OneToMany(() => Student, (student) => student.section)
students: Student[];

}