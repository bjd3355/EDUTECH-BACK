"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
const teacher_service_1 = require("../teacher/teacher.service");
const student_service_1 = require("../student/student.service");
const users_entity_1 = require("../users/users.entity");
const bcrypt = require("bcrypt");
const teacher_entity_1 = require("../teacher/teacher.entity");
const DEFAULT_PASSWORD = "defaultPassword123";
let AuthService = class AuthService {
    jwtService;
    usersService;
    teacherService;
    studentService;
    constructor(jwtService, usersService, teacherService, studentService) {
        this.jwtService = jwtService;
        this.usersService = usersService;
        this.teacherService = teacherService;
        this.studentService = studentService;
    }
    async login(email, password) {
        const user = await this.usersService.findOneByEmail(email);
        if (!user) {
            throw new common_1.UnauthorizedException("Utilisateur non trouvé");
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException("Mot de passe incorrect");
        }
        if (user.isDefaultPassword) {
            throw new common_1.UnauthorizedException("Mot de passe par défaut, veuillez le changer lors de votre première connexion");
        }
        const payload = { sub: user.id, email: user.email, role: user.role };
        const accessToken = this.jwtService.sign(payload);
        return { access_token: accessToken, user };
    }
    async validateUser(payload) {
        const user = await this.usersService.findOneByEmail(payload.email);
        if (!user) {
            throw new common_1.UnauthorizedException("Utilisateur non trouvé");
        }
        return user;
    }
    async register(dto) {
        if (!dto.email || !dto.nom || !dto.prenom) {
            throw new common_1.BadRequestException("Informations manquantes");
        }
        const passwordToUse = dto.password ? dto.password : DEFAULT_PASSWORD;
        const hashedPassword = await bcrypt.hash(passwordToUse, 10);
        const filiereId = dto.filiereId ? parseInt(dto.filiereId, 10) : undefined;
        const createUserDto = {
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
            genre: dto.genre,
            photo: dto.photo,
            isDefaultPassword: !dto.password,
        };
        switch (dto.role) {
            case users_entity_1.Role.ADMIN:
                return await this.usersService.create(createUserDto);
            case users_entity_1.Role.TEACHER: {
                let teacherStatus;
                if (dto.status) {
                    teacherStatus =
                        dto.status === "actif"
                            ? teacher_entity_1.TeacherStatus.AVAILABLE
                            : teacher_entity_1.TeacherStatus.UNAVAILABLE;
                }
                const user = await this.usersService.create(createUserDto);
                const createTeacherDto = {
                    nom: dto.nom,
                    prenom: dto.prenom,
                    email: dto.email,
                    password: hashedPassword,
                    filieres: dto.filieres,
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
                const teacher = await this.teacherService.create(createTeacherDto, user);
                return { user, teacher };
            }
            case users_entity_1.Role.STUDENT: {
                const sectionId = dto.sectionId
                    ? parseInt(dto.sectionId, 10)
                    : undefined;
                const filiereId = dto.filiereId
                    ? parseInt(dto.filiereId, 10)
                    : undefined;
                const user = await this.usersService.create(createUserDto);
                const createStudentDto = {
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
                throw new common_1.BadRequestException("Role non valide");
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        users_service_1.UsersService,
        teacher_service_1.TeacherService,
        student_service_1.StudentService])
], AuthService);
//# sourceMappingURL=auth.service.js.map