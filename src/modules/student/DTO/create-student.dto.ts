// src/modules/student/dto/create-student.dto.ts
import {
  IsNotEmpty,
  IsEmail,
  IsOptional,
  IsString,
  IsDateString,
} from "class-validator";
import { Type } from "class-transformer";

export class CreateStudentDto {
  @IsNotEmpty()
  @IsString()
  userId: string; // Cet identifiant sera celui généré dans "users"

  @IsNotEmpty()
  @IsString()
  nom: string;

  @IsNotEmpty()
  @IsString()
  prenom: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsString()
  classe?: string;

  @IsOptional()
  @IsString()
  niveau?: string;

  @IsOptional()
  @Type(() => Number)
  sectionId?: number;

  @IsOptional()
  @Type(() => Number)
  filiereId?: number;

  // Nouveaux champs
  @IsOptional()
  @IsString()
  telephone?: string;

  @IsOptional()
  @IsString()
  adresse?: string;

  @IsOptional()
  @IsDateString()
  dateNaissance?: string;

  @IsOptional()
  @IsString()
  photo?: string;

  @IsOptional()
  @IsDateString()
  dateInscription?: string;

  @IsOptional()
  @IsDateString()
  derniereConnexion?: string;

  @IsOptional()
  @IsString()
  genre?: string;
}
