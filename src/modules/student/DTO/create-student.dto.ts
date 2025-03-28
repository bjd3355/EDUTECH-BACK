// src/modules/student/dto/create-student.dto.ts
export class CreateStudentDto {
    firstName: string;
    lastName: string;
    email: string;
    password?: string; // vide initialement
    classe?: string;
    niveau?: string;
    sectionId?: number;
    filiereId?: number;
  }
  