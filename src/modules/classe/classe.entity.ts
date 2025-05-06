// src/modules/classe/classe.entity.ts
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
    JoinColumn,
    ManyToMany,
  } from "typeorm";
  import { Niveau } from "../niveau/niveau.entity";
  import { Section } from "../section/section.entity";
  import { Filiere } from "../filiere/filiere.entity";
  import { Student } from "../student/student.entity";
  import { Teacher } from "../teacher/teacher.entity";
  import { Matiere } from "../matiere/matiere.entity";
  
  @Entity("classes")
  export class Classe {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ length: 100, unique: true })
    nom: string;
  
    @ManyToOne(() => Niveau, niveau => niveau.classes, { onDelete: "CASCADE" })
    @JoinColumn({ name: "niveauId" })
    niveau: Niveau;
  
    @ManyToOne(() => Section, section => section.classes, { onDelete: "CASCADE" })
    @JoinColumn({ name: "sectionId" })
    section: Section;
  
    @ManyToOne(() => Filiere, filiere => filiere.classes, { onDelete: "CASCADE" })
    @JoinColumn({ name: "filiereId" })
    filiere: Filiere;
  
    @OneToMany(() => Student, student => student.classe)
    students: Student[];
  
    @ManyToMany(() => Teacher, teacher => teacher.classes)
    teachers: Teacher[];
  
    @OneToMany(() => Matiere, matiere => matiere.classe)
    matieres: Matiere[];
  }
  