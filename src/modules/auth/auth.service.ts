import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../users/users.service";
import { TeacherService } from "../teacher/teacher.service";
import { StudentService } from "../student/student.service";
import { User, Role } from "../users/users.entity";
import * as bcrypt from "bcrypt";
import { UserGender } from "../users/users.entity";

import { CreateUserDto } from "../users/DTO/create-user.dto";
import { TeacherStatus } from "../teacher/teacher.entity";
import { CreateTeacherDto } from "../teacher/DTO/create-teacher.dto";
import { CreateStudentDto } from "../student/DTO/create-student.dto";
import { RegisterDto } from "./dto/register.dto";

const DEFAULT_PASSWORD = "defaultPassword123";

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
    private teacherService: TeacherService,
    private studentService: StudentService,
  ) {}

  async login(email: string, password: string) {
    const user: User | null = await this.usersService.findOneByEmail(email);
    if (!user) {
      throw new UnauthorizedException("Utilisateur non trouvé");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException("Mot de passe incorrect");
    }

    if (user.isDefaultPassword) {
      throw new UnauthorizedException(
        "Mot de passe par défaut, veuillez le changer lors de votre première connexion",
      );
    }

    const payload = { sub: user.id, email: user.email, role: user.role };
    const accessToken = this.jwtService.sign(payload);
    return { access_token: accessToken, user };
  }

  async validateUser(payload: {
    sub: string;
    email: string;
    role: string;
  }): Promise<User> {
    const user: User | null = await this.usersService.findOneByEmail(
      payload.email,
    );
    if (!user) {
      throw new UnauthorizedException("Utilisateur non trouvé");
    }
    return user;
  }

  async register(dto: RegisterDto) {
    if (!dto.email || !dto.nom || !dto.prenom) {
      throw new BadRequestException("Informations manquantes");
    }

    const passwordToUse = dto.password ? dto.password : DEFAULT_PASSWORD;
    const hashedPassword = await bcrypt.hash(passwordToUse, 10);
    const filiereId = dto.filiereId ? parseInt(dto.filiereId, 10) : undefined;

    // Création de l'utilisateur commun
    const createUserDto: CreateUserDto = {
      nom: dto.nom,
      prenom: dto.prenom,
      email: dto.email,
      password: hashedPassword,
      filiereId,
      role: dto.role,
      telephone: dto.telephone,
      adresse: dto.adresse,
      dateNaissance: dto.dateNaissance,
      dateInscription: dto.dateInscription,
      derniereConnexion: dto.derniereConnexion,
      genre: dto.genre as UserGender,
      photo: dto.photo,
      isDefaultPassword: !dto.password,
    };

    switch (dto.role) {
      case Role.ADMIN:
        return await this.usersService.create(createUserDto);

      case Role.TEACHER: {
        let teacherStatus: TeacherStatus | undefined;
        if (dto.status) {
          teacherStatus =
            dto.status === "actif"
              ? TeacherStatus.AVAILABLE
              : TeacherStatus.UNAVAILABLE;
        }

        // Création de l'utilisateur
        const user = await this.usersService.create(createUserDto);

        // Préparation du DTO enseignant, sans l'id qui sera lié via la relation avec l'utilisateur
        const createTeacherDto: CreateTeacherDto = {
          nom: dto.nom,
          prenom: dto.prenom,
          email: dto.email,
          password: hashedPassword,
          filieres: dto.filieres, // Tableau d'identifiants de filières sous forme de chaîne de caractères
          classes: dto.classes,
          modules: dto.modules,
          status: teacherStatus,
          telephone: dto.telephone,
          adresse: dto.adresse,
          dateNaissance: dto.dateNaissance,
          photo: dto.photo,
          dateInscription: dto.dateInscription,
          derniereConnexion: dto.derniereConnexion,
          grade: dto.grade,
          specialite: dto.specialite,
        };

        // Passage de l'utilisateur créé pour lier la relation OneToOne
        const teacher = await this.teacherService.create(
          createTeacherDto,
          user,
        );
        return { user, teacher };
      }

      case Role.STUDENT: {
        const sectionId = dto.sectionId
          ? parseInt(dto.sectionId, 10)
          : undefined;
        const filiereId = dto.filiereId
          ? parseInt(dto.filiereId, 10)
          : undefined;

        const user = await this.usersService.create(createUserDto);

        const createStudentDto: CreateStudentDto = {
          nom: dto.nom,
          prenom: dto.prenom,
          email: dto.email,
          password: hashedPassword,
          classe: dto.classe,
          niveau: dto.niveau,
          sectionId,
          filiereId,
          telephone: dto.telephone,
          adresse: dto.adresse,
          dateNaissance: dto.dateNaissance,
          photo: dto.photo,
          dateInscription: dto.dateInscription,
          derniereConnexion: dto.derniereConnexion,
          genre: dto.genre,
          userId: user.id,
        };

        const student = await this.studentService.create(createStudentDto);
        return { user, student };
      }

      default:
        throw new BadRequestException("Role non valide");
    }
  }
}
