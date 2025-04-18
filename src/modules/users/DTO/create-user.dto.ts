import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsEnum,
  MinLength,
  IsOptional,
  IsDateString,
} from "class-validator";
import { Type } from "class-transformer";
import { Role, UserStatus, UserGender } from "../users.entity";

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  nom: string; // anciennement firstName

  @IsNotEmpty()
  @IsString()
  prenom: string; // anciennement lastName

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  isDefaultPassword?: boolean;

  @IsEnum(Role)
  role: Role;

  @IsOptional()
  @Type(() => Number)
  filiereId?: number;

  @IsEnum(UserStatus)
  @IsOptional()
  status?: UserStatus;

  @IsDateString()
  @IsOptional()
  dateInscription?: string;

  @IsDateString()
  @IsOptional()
  derniereConnexion?: string;

  @IsOptional()
  @IsString()
  telephone?: string;

  @IsOptional()
  @IsString()
  adresse?: string;

  @IsDateString()
  @IsOptional()
  dateNaissance?: string;

  @IsEnum(UserGender)
  @IsOptional()
  genre?: UserGender;

  @IsOptional()
  @IsString()
  photo?: string;
}
