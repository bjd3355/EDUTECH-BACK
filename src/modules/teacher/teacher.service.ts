// src/modules/teacher/teacher.service.ts
import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository, DeepPartial } from "typeorm";
import { Teacher } from "./teacher.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateTeacherDto } from "./DTO/create-teacher.dto";
import { UpdateTeacherDto } from "./DTO/update-teacher.dto";
import { User } from "../users/users.entity";
import { UsersService } from "../users/users.service"; // Assurez-vous d'importer le service utilisateur

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private teacherRepo: Repository<Teacher>,
    private usersService: UsersService, // Injection du service utilisateur
  ) {}

  // Rendre le paramètre 'user' optionnel en ajoutant le point d'interrogation
  async create(dto: CreateTeacherDto, user?: User): Promise<Teacher> {
    // Si l'utilisateur n'est pas fourni, on le recherche par email
    if (!user) {
      const foundUser: User | null = await this.usersService.findOneByEmail(
        dto.email,
      );
      if (!foundUser) {
        throw new NotFoundException(
          "Utilisateur introuvable pour la création de l'enseignant",
        );
      }
      user = foundUser; // Maintenant user est de type User
    }

    const filieres = dto.filieres?.map(id => ({ id: Number(id) }));

    const teacherData: DeepPartial<Teacher> = {
      id: user.id,
      user: user,
      nom: dto.nom,
      prenom: dto.prenom,
      email: dto.email,
      password: dto.password,
      telephone: dto.telephone,
      adresse: dto.adresse,
      grade: dto.grade,
      specialite: dto.specialite,
      filieres: filieres,
      status: dto.status,
    };

    const teacher = this.teacherRepo.create(teacherData);
    return this.teacherRepo.save(teacher);
  }

  async findAll(): Promise<Teacher[]> {
    return this.teacherRepo.find();
  }

  async findOne(id: string): Promise<Teacher> {
    const teacher = await this.teacherRepo.findOne({
      where: { id: id },
    });
    if (!teacher) {
      throw new NotFoundException(`Teacher #${id} not found`);
    }
    return teacher;
  }

  async update(id: string, dto: UpdateTeacherDto): Promise<Teacher> {
    const teacher = await this.findOne(id);
    Object.assign(teacher, dto);
    return this.teacherRepo.save(teacher);
  }

  async remove(id: string): Promise<void> {
    const teacher = await this.findOne(id);
    await this.teacherRepo.remove(teacher);
  }
}
