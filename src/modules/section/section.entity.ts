// src/modules/section/section.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Niveau } from '../niveau/niveau.entity';
import { EmploiDuTemps } from '../emploi-du-temps/emploi-du-temps.entity';
import { Matiere } from '../matiere/matiere.entity';

@Entity('sections')
export class Section {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @ManyToOne(() => Niveau, (niveau: Niveau) => niveau.sections, { onDelete: 'CASCADE' })
  niveau: Niveau;

  @OneToMany(() => EmploiDuTemps, emploi => emploi.section)
  emploisDuTemps: EmploiDuTemps[];

  @OneToMany(() => Matiere, matiere => matiere.section)
  matieres: Matiere[];
}
