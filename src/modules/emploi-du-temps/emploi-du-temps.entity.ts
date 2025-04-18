// src/modules/emploi-du-temps/emploi-du-temps.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "../users/users.entity";
import { Filiere } from "../filiere/filiere.entity";
import { Matiere } from "../matiere/matiere.entity";
import { Niveau } from "../niveau/niveau.entity";
import { Section } from "../section/section.entity";

@Entity("emplois_du_temps")
export class EmploiDuTemps {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "date" })
  date: Date;

  @Column({ type: "time" })
  heureDebut: string;

  @Column({ type: "time" })
  heureFin: string;

  @Column()
  module: string;

  @ManyToOne(() => User, { eager: true })
  professeur: User;

  @ManyToOne(() => Filiere, (filiere) => filiere.emploisDuTemps, {
    eager: true,
    nullable: true,
  })
  filiere: Filiere;

  @ManyToOne(() => Matiere, (matiere) => matiere.emploisDuTemps, {
    eager: true,
    nullable: true,
  })
  matiere: Matiere;

  @ManyToOne(() => Niveau, (niveau) => niveau.emploisDuTemps, {
    eager: true,
    nullable: true,
  })
  niveau: Niveau;

  @ManyToOne(() => Section, (section) => section.emploisDuTemps, {
    eager: true,
    nullable: true,
  })
  section: Section;
}
