// src/modules/teacher/teacher.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository, DeepPartial } from 'typeorm';
import { Teacher } from './teacher.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTeacherDto } from './DTO/create-teacher.dto';
import { UpdateTeacherDto } from './DTO/update-teacher.dto';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private teacherRepo: Repository<Teacher>,
  ) {}

  async create(dto: CreateTeacherDto): Promise<Teacher> {
    // Forcer la conversion en DeepPartial<Teacher> pour correspondre aux propriétés attendues
    const teacher: DeepPartial<Teacher> = dto;
    const createdTeacher = this.teacherRepo.create(teacher);
    return this.teacherRepo.save(createdTeacher);
  }

  async findAll(): Promise<Teacher[]> {
    return this.teacherRepo.find();
  }

  async findOne(id: number): Promise<Teacher> {
    const teacher = await this.teacherRepo.findOne({ where: { id } });
    if (!teacher) {
      throw new NotFoundException(`Teacher #${id} not found`);
    }
    return teacher;
  }

  async update(id: number, dto: UpdateTeacherDto): Promise<Teacher> {
    const teacher = await this.findOne(id);
    Object.assign(teacher, dto);
    return this.teacherRepo.save(teacher);
  }

  async remove(id: number): Promise<void> {
    const teacher = await this.findOne(id);
    await this.teacherRepo.remove(teacher);
  }
}
