// src/modules/student/student.service.ts
import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { Student } from "./student.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateStudentDto } from "./DTO/create-student.dto";
import { UpdateStudentDto } from "./DTO/update-student.dto";

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepo: Repository<Student>,
  ) {}

  async create(dto: CreateStudentDto): Promise<Student> {
    if (!dto.userId) {
      throw new Error(
        "L'id de l'utilisateur est requis pour créer un étudiant",
      );
    }
    // Créez l'entité Student en assignant l'id provenant du DTO
    const student = this.studentRepo.create({
      id: dto.userId, // Réutilisation de l'id généré dans la table users
      nom: dto.nom,
      prenom: dto.prenom,
      email: dto.email,
      password: dto.password,
      classe: dto.classe,
      niveau: dto.niveau,
      telephone: dto.telephone,
      adresse: dto.adresse,
      dateNaissance: dto.dateNaissance,
      photo: dto.photo,
      genre: dto.genre,
    });
    return this.studentRepo.save(student);
  }

  async findAll(): Promise<Student[]> {
    return this.studentRepo.find();
  }

  async findOne(id: string): Promise<Student> {
    const student = await this.studentRepo.findOne({ where: { id } });
    if (!student) {
      throw new NotFoundException(`Student #${id} not found`);
    }
    return student;
  }

  async update(id: string, dto: UpdateStudentDto): Promise<Student> {
    const student = await this.findOne(id);
    Object.assign(student, dto);
    return this.studentRepo.save(student);
  }

  async remove(id: string): Promise<void> {
    const student = await this.findOne(id);
    await this.studentRepo.remove(student);
  }
}
