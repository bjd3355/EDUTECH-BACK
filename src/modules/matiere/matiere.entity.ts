// src/modules/matiere/matiere.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../users/users.entity';
import { Section } from '../section/section.entity';
import { EmploiDuTemps } from '../emploi-du-temps/emploi-du-temps.entity';

@Entity('matieres')
export class Matiere {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @ManyToOne(() => User, { nullable: true, eager: true })
  professeur: User;

  @ManyToOne(() => Section, (section) => section.matieres, { nullable: true })
  section: Section;

  @OneToMany(() => EmploiDuTemps, (emploiDuTemps) => emploiDuTemps.matiere)
  emploisDuTemps: EmploiDuTemps[];
}
