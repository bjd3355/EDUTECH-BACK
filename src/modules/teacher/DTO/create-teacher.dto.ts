import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsEnum,
  MinLength,
  IsOptional,
  IsDateString,
  IsArray,
} from "class-validator";
import { TeacherStatus } from "../teacher.entity";

export class CreateTeacherDto {
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
  @MinLength(6)
  password?: string;

  // Utilisez 'filieres' pour accepter un tableau d'identifiants (sous forme de chaîne)
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  filieres?: string[];

  // Propriétés supplémentaires
  @IsOptional()
  @IsString()
  telephone?: string;

  @IsOptional()
  @IsString()
  adresse?: string;

  @IsOptional()
  @IsString()
  grade?: string;

  @IsOptional()
  @IsString()
  specialite?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  classes?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  modules?: string[];

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
  @IsEnum(TeacherStatus)
  status?: TeacherStatus;
}
