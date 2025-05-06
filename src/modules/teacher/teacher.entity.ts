import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Filiere } from "../filiere/filiere.entity";
import { User } from "../users/users.entity";
import { Cours } from "../cours/cours.entity";
import { Classe } from "../classe/classe.entity";
import { Matiere } from "../matiere/matiere.entity";

export enum TeacherStatus {
  AVAILABLE = "AVAILABLE",
  UNAVAILABLE = "UNAVAILABLE",
}

@Entity("teachers")
export class Teacher {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  professeurId: string; // Identifiant lisible comme PROF-001

  @OneToOne(() => User, { onDelete: "CASCADE" })
  @JoinColumn()
  user: User;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @ManyToMany(() => Filiere, filiere => filiere.teachers, { eager: true, cascade: true })
  @JoinTable({
    name: "teacher_filieres",
    joinColumn: { name: "teacherId", referencedColumnName: "id" },
    inverseJoinColumn: { name: "filiereId", referencedColumnName: "id" },
  })
  filieres: Filiere[];

  @Column({ nullable: true })
  grade?: string;

  @Column({ nullable: true })
  specialite?: string;

  @ManyToMany(() => Classe, classe => classe.teachers, { eager: true })
  @JoinTable({
    name: "teacher_classes",
    joinColumn: { name: "teacherId", referencedColumnName: "id" },
    inverseJoinColumn: { name: "classeId", referencedColumnName: "id" },
  })
  classes: Classe[];

  @ManyToMany(() => Matiere, matiere => matiere.professeurs)
  @JoinTable({
    name: "teacher_matieres",
    joinColumn: { name: "teacherId", referencedColumnName: "id" },
    inverseJoinColumn: { name: "matiereId", referencedColumnName: "id" },
  })
  matieres: Matiere[];

  @Column("simple-array", { nullable: true })
  modules: string[];

  @Column({ type: "enum", enum: TeacherStatus, default: TeacherStatus.AVAILABLE })
  status: TeacherStatus;

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

  @OneToMany(() => Cours, cours => cours.professeur)
  cours: Cours[];
}
