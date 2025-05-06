import { Column, Entity, IsNull, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Teacher } from "../teacher/teacher.entity";
import { Student } from "../student/student.entity";
import { statusCours } from "./interface/cours.enum";

@Entity()
export class Cours{
    
    @PrimaryColumn('uuid')
    id_cours:string;

    @Column()
    titre:string;

    @Column()
    description:string;
    
    @Column({type:'timestamp'})
    dateCreation:Date;

    @Column({type:'time'})
    duree:string;

    @Column()
    support:string;

    @ManyToOne(()=>Teacher, (teacher) => teacher.cours, {eager:true})
    @JoinColumn()
    professeur: Teacher;

    @Column()
    filiere:string;

    @Column()
    classe:string;

    @Column()
    image:string;

    @ManyToMany(() => Student, (student) => student.cours)
    @JoinTable()
    student: Student[];


    @Column()
    status: statusCours;

}