// src/modules/student/student.controller.ts
import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
  UseGuards,
} from "@nestjs/common";
import { StudentService } from "./student.service";
import { CreateStudentDto } from "./DTO/create-student.dto";
import { UpdateStudentDto } from "./DTO/update-student.dto";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { RolesGuard } from "../auth/roles.guard";
import { Roles } from "../auth/roles.decorator";
import { Role } from "../users/users.entity";

@Controller("students")
@UseGuards(JwtAuthGuard, RolesGuard)
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  @Roles(Role.ADMIN)
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }

  @Get()
  @Roles(Role.ADMIN)
  findAll() {
    return this.studentService.findAll();
  }

  @Get(":id")
  @Roles(Role.ADMIN, Role.STUDENT)
  findOne(@Param("id") id: string) {
    return this.studentService.findOne(id);
  }

  @Patch(":id")
  @Roles(Role.ADMIN)
  update(@Param("id") id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.update(id, updateStudentDto);
  }

  @Delete(":id")
  @Roles(Role.ADMIN)
  remove(@Param("id") id: string) {
    return this.studentService.remove(id);
  }
}
