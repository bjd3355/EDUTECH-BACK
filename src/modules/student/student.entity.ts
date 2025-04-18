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

@Entity("students")
export class Student {
  // On définit la colonne primaire sans génération automatique
  @PrimaryColumn("uuid")
  id: string;

  // On crée une relation one-to-one avec User pour partager l'id
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

  @Column({ nullable: true })
  classe: string;

  @Column({ nullable: true })
  niveau: string;

  @ManyToOne(() => Section, { eager: true, nullable: true })
  section: Section;

  @ManyToOne(() => Filiere, (filiere) => filiere.students, {
    eager: true,
    nullable: true,
  })
  filiere: Filiere;

  @Column({ nullable: true })
  telephone: string;

  @Column({ nullable: true })
  adresse: string;

  @Column({ type: "date", nullable: true })
  dateNaissance: string;

  @Column({ nullable: true })
  photo: string;

  @Column({
    type: "datetime",
    default: () => "CURRENT_TIMESTAMP",
  })
  date_inscription: Date;

  @Column({
    type: "datetime",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  derniere_connexion: Date;

  @Column({ nullable: true })
  genre: string;

  @ManyToMany(() => Cours, (cours) => cours.student)
  cours: Cours[];
}
