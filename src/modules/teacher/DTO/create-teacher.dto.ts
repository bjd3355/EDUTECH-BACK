// src/modules/teacher/dto/create-teacher.dto.ts
import { TeacherStatus } from '../teacher.entity';

export class CreateTeacherDto {
  firstName: string;
  lastName: string;
  email: string;
  password?: string; // Initialement vide
  filiereId?: number;
  classes?: string[];
  modules?: string[];
  status?: TeacherStatus;  // Utilisation de l'enum TeacherStatus
}
