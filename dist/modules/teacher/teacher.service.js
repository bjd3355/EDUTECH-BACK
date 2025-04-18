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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const teacher_entity_1 = require("./teacher.entity");
const typeorm_2 = require("@nestjs/typeorm");
const users_service_1 = require("../users/users.service");
let TeacherService = class TeacherService {
    teacherRepo;
    usersService;
    constructor(teacherRepo, usersService) {
        this.teacherRepo = teacherRepo;
        this.usersService = usersService;
    }
    async create(dto, user) {
        if (!user) {
            const foundUser = await this.usersService.findOneByEmail(dto.email);
            if (!foundUser) {
                throw new common_1.NotFoundException("Utilisateur introuvable pour la création de l'enseignant");
            }
            user = foundUser;
        }
        const filieres = dto.filieres && Array.isArray(dto.filieres)
            ? dto.filieres.map((id) => ({ id: parseInt(id, 10) }))
            : undefined;
        const teacher = {
            ...dto,
            filieres,
            user: user,
        };
        const createdTeacher = this.teacherRepo.create(teacher);
        return this.teacherRepo.save(createdTeacher);
    }
    async findAll() {
        return this.teacherRepo.find();
    }
    async findOne(id) {
        const teacher = await this.teacherRepo.findOne({
            where: { id: id },
        });
        if (!teacher) {
            throw new common_1.NotFoundException(`Teacher #${id} not found`);
        }
        return teacher;
    }
    async update(id, dto) {
        const teacher = await this.findOne(id);
        Object.assign(teacher, dto);
        return this.teacherRepo.save(teacher);
    }
    async remove(id) {
        const teacher = await this.findOne(id);
        await this.teacherRepo.remove(teacher);
    }
};
exports.TeacherService = TeacherService;
exports.TeacherService = TeacherService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(teacher_entity_1.Teacher)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        users_service_1.UsersService])
], TeacherService);
//# sourceMappingURL=teacher.service.js.map