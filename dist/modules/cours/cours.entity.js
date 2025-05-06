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
exports.Cours = void 0;
const typeorm_1 = require("typeorm");
const teacher_entity_1 = require("../teacher/teacher.entity");
const student_entity_1 = require("../student/student.entity");
const cours_enum_1 = require("./interface/cours.enum");
let Cours = class Cours {
    id_cours;
    titre;
    description;
    dateCreation;
    duree;
    support;
    professeur;
    filiere;
    classe;
    image;
    student;
    status;
};
exports.Cours = Cours;
__decorate([
    (0, typeorm_1.PrimaryColumn)('uuid'),
    __metadata("design:type", String)
], Cours.prototype, "id_cours", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Cours.prototype, "titre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Cours.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Cours.prototype, "dateCreation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time' }),
    __metadata("design:type", String)
], Cours.prototype, "duree", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Cours.prototype, "support", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => teacher_entity_1.Teacher, (teacher) => teacher.cours, { eager: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", teacher_entity_1.Teacher)
], Cours.prototype, "professeur", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Cours.prototype, "filiere", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Cours.prototype, "classe", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Cours.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => student_entity_1.Student, (student) => student.cours),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Cours.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Cours.prototype, "status", void 0);
exports.Cours = Cours = __decorate([
    (0, typeorm_1.Entity)()
], Cours);
//# sourceMappingURL=cours.entity.js.map