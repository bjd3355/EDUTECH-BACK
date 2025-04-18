// src/modules/niveau/niveau.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Filiere } from "../filiere/filiere.entity";
import { EmploiDuTemps } from "../emploi-du-temps/emploi-du-temps.entity";
import { Section } from "../section/section.entity";

@Entity("niveaux")
export class Niveau {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @ManyToOne(() => Filiere, (filiere) => filiere.niveaux, {
    onDelete: "CASCADE",
  })
  filiere: Filiere;

  @OneToMany(() => EmploiDuTemps, (emploi) => emploi.niveau)
  emploisDuTemps: EmploiDuTemps[];

  @OneToMany(() => Section, (section) => section.niveau)
  sections: Section[];
}
