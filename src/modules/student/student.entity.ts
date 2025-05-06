// src/modules/student/student.entity.ts
import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  OneToOne,
  JoinColumn,
  ManyToMany,
} from "typeorm";
import { Filiere } from "../filiere/filiere.entity";
import { Section } from "../section/section.entity";
import { User } from "../users/users.entity";
import { Cours } from "../cours/cours.entity";
import { Classe } from "../classe/classe.entity";

@Entity("students")
export class Student {
  // Clé primaire partagée avec User
  @PrimaryColumn("uuid")
  id: string;

  @OneToOne(() => User, { onDelete: "CASCADE" })
  @JoinColumn({ name: "id" })
  user: User;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  // Relation vers Classe (étudiant appartient à une seule classe)
  @ManyToOne(() => Classe, classe => classe.students, {
    eager: true,
    nullable: true,
    onDelete: "SET NULL"
  })
  @JoinColumn({ name: "classeId" })
  classe: Classe;

  @ManyToOne(() => Section, section => section.students, { eager: true, nullable: true })
  @JoinColumn({ name: "sectionId" })
  section: Section;

  @ManyToOne(() => Filiere, filiere => filiere.students, { eager: true, nullable: true })
  @JoinColumn({ name: "filiereId" })
  filiere: Filiere;

  @Column({ nullable: true })
  telephone: string;

  @Column({ nullable: true })
  adresse: string;

  @Column({ type: "date", nullable: true })
  dateNaissance: string;

  @Column({ nullable: true })
  photo: string;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  date_inscription: Date;

  @Column({ type: "datetime", nullable: true, default: () => "CURRENT_TIMESTAMP" })
  derniere_connexion: Date;

  @Column({ nullable: true })
  genre: string;

  @ManyToMany(() => Cours, cours => cours.student)
  cours: Cours[];
}