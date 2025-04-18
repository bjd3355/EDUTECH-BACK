// src/modules/users/users.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { UserActivity } from "./user-activity.entity";
import { Filiere } from "../filiere/filiere.entity";

export enum Role {
  ADMIN = "ADMIN",
  TEACHER = "TEACHER",
  STUDENT = "STUDENT",
}

export enum UserStatus {
  ACTIF = "actif",
  INACTIF = "inactif",
  SUSPENDU = "suspendu",
  EN_ATTENTE = "en attente",
}

export enum UserGender {
  HOMME = "homme",
  FEMME = "femme",
  AUTRE = "autre",
}

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  // Mise à jour pour correspondre au front (noms en français)
  @Column()
  nom: string; // anciennement firstName

  @Column()
  prenom: string; // anciennement lastName

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  password: string; // Initialement vide pour TEACHER et STUDENT

  @ManyToOne(() => Filiere, (filiere) => filiere.students, {
    eager: true,
    nullable: true,
  })
  filiere: Filiere;

  @Column({ default: false })
  isDefaultPassword: boolean;

  @Column({
    type: "enum",
    enum: Role,
    default: Role.STUDENT,
  })
  role: Role;

  // Nouveaux champs pour le front-end
  @Column({
    type: "enum",
    enum: UserStatus,
    default: UserStatus.EN_ATTENTE,
  })
  status: UserStatus;

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
  telephone: string;

  @Column({ nullable: true })
  adresse: string;

  @Column({ type: "date", nullable: true, name: "date_naissance" })
  dateNaissance: string;

  @Column({ type: "enum", enum: UserGender, nullable: true })
  genre: UserGender;

  @Column({ nullable: true })
  photo: string;

  // Pour les activités, vous pouvez soit créer une entité dédiée, soit stocker un JSON
  @OneToMany(() => UserActivity, (activity) => activity.user, {
    cascade: true,
    eager: true,
  })
  activites: UserActivity[];
}
