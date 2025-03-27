
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum RoleUtilisateur {
  ADMINISTRATEUR = 'administrateur',
  PROFESSEUR = 'professeur',
  ETUDIANT = 'étudiant',
}

@Entity()
export class Utilisateur {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomUtilisateur: string;

  @Column()
  motDePasse: string;

  @Column({ type: 'enum', enum: RoleUtilisateur }) 
  role: RoleUtilisateur;
}