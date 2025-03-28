// src/modules/users/users.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum Role {
  ADMIN = 'ADMIN',
  TEACHER = 'TEACHER',
  STUDENT = 'STUDENT',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  firstName: string;
  
  @Column()
  lastName: string;
  
  @Column({ unique: true })
  email: string;
  
  @Column({ nullable: true })
  password: string; // Initialement vide pour TEACHER et STUDENT
  
  @Column({
    type: 'enum',
    enum: Role,
    default: Role.STUDENT,
  })
  role: Role;
}
