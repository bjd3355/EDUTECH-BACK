import { Column, Entity, IsNull, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cours{
    
    @PrimaryGeneratedColumn()
    id:number;

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

    @Column()
    professeur:string;

    @Column()
    photo:string;

}