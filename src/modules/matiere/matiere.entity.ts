// src/modules/matiere/matiere.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
  JoinTable,
} from "typeorm";
import { Section } from "../section/section.entity";
import { Teacher } from "../teacher/teacher.entity";
import { Classe } from "../classe/classe.entity";
import { Filiere } from "../filiere/filiere.entity";

@Entity("matieres")
export class Matiere {
  // Renommé en "matiereId" dans la base de données
  @PrimaryGeneratedColumn({ name: "matiereId" })
  id: number;

  @Column()
  nom: string;

  @ManyToMany(() => Teacher, teacher => teacher.matieres)
  @JoinTable({
    name: "matiere_teachers",
    joinColumn: { name: "matiereId", referencedColumnName: "id" },
    inverseJoinColumn: { name: "teacherId", referencedColumnName: "id" },
  })
  professeurs: Teacher[];

  @ManyToOne(() => Section, section => section.matieres, { nullable: true })
  section: Section;

  @ManyToOne(() => Classe, classe => classe.matieres, { nullable: false })
  classe: Classe;

  @ManyToOne(() => Filiere, { nullable: false })
  filiere: Filiere;
}
