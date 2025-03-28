// src/modules/users/dto/create-user.dto.ts
import { IsEmail, IsNotEmpty, IsString, IsEnum, MinLength } from 'class-validator';
import { Role } from '../users.entity';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;
  
  @IsNotEmpty()
  @IsString()
  lastName: string;
  
  @IsNotEmpty()
  @IsEmail()
  email: string;
  
  @IsNotEmpty()
  @MinLength(6)
  password: string;
  
  @IsEnum(Role)
  role: Role;
}
