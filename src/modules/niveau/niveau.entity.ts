


// src/modules/niveau/niveau.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
} from "typeorm";
import { Classe } from "../classe/classe.entity";
import { Section } from "../section/section.entity";
import { Filiere } from "../filiere/filiere.entity";

@Entity("niveaux")
export class Niveau {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @ManyToMany(() => Section, section => section.niveaux)
  sections: Section[];

  @ManyToMany(() => Filiere, filiere => filiere.niveaux)
  filieres: Filiere[];

  @OneToMany(() => Classe, classe => classe.niveau)
  classes: Classe[];
}