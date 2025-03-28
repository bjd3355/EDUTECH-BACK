// src/modules/auth/auth.controller.ts
import { Controller, Post, Body, UseGuards, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';
import { Role } from '../users/users.entity';

import { UsersService } from '../users/users.service';
import { StudentService } from '../student/student.service';
import { TeacherService } from '../teacher/teacher.service';

import { CreateUserDto } from '../users/DTO/create-user.dto';
import { CreateStudentDto } from '../student/DTO/create-student.dto';
import { CreateTeacherDto } from '../teacher/DTO/create-teacher.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
    private readonly studentService: StudentService,
    private readonly teacherService: TeacherService,
  ) {}

  @Post('login')
  async login(@Body() loginDto: { email: string; password: string }) {
    return this.authService.login(loginDto.email, loginDto.password);
  }

  @Post('register')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  async register(@Body() dto: any) {
    // En fonction du rôle, dispatch vers le service approprié
    if (dto.role === Role.ADMIN) {
      const createUserDto: CreateUserDto = {
        firstName: dto.firstName,
        lastName: dto.lastName,
        email: dto.email,
        password: dto.password,
        role: Role.ADMIN,
      };
      return this.usersService.create(createUserDto);
    } else if (dto.role === Role.TEACHER) {
      const createTeacherDto: CreateTeacherDto = {
        firstName: dto.firstName,
        lastName: dto.lastName,
        email: dto.email,
        password: dto.password,
        classes: dto.classes,   // Tableau des classes
        modules: dto.modules,   // Tableau des modules
        status: dto.status,     // Optionnel, avec valeur par défaut dans l'entité
        filiereId: dto.filiereId, // Optionnel, si besoin
      };
      return this.teacherService.create(createTeacherDto);
    } else if (dto.role === Role.STUDENT) {
      const createStudentDto: CreateStudentDto = {
        firstName: dto.firstName,
        lastName: dto.lastName,
        email: dto.email,
        password: dto.password,
        classe: dto.classe,
        niveau: dto.niveau,
        sectionId: dto.sectionId,
        filiereId: dto.filiereId,
      };
      return this.studentService.create(createStudentDto);
    } else {
      throw new BadRequestException('Role non valide');
    }
  }
}
