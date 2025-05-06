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
exports.Classe = void 0;
const typeorm_1 = require("typeorm");
const niveau_entity_1 = require("../niveau/niveau.entity");
const section_entity_1 = require("../section/section.entity");
const filiere_entity_1 = require("../filiere/filiere.entity");
const student_entity_1 = require("../student/student.entity");
const teacher_entity_1 = require("../teacher/teacher.entity");
const matiere_entity_1 = require("../matiere/matiere.entity");
let Classe = class Classe {
    id;
    nom;
    niveau;
    section;
    filiere;
    students;
    teachers;
    matieres;
};
exports.Classe = Classe;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Classe.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, unique: true }),
    __metadata("design:type", String)
], Classe.prototype, "nom", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => niveau_entity_1.Niveau, niveau => niveau.classes, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "niveauId" }),
    __metadata("design:type", niveau_entity_1.Niveau)
], Classe.prototype, "niveau", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => section_entity_1.Section, section => section.classes, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "sectionId" }),
    __metadata("design:type", section_entity_1.Section)
], Classe.prototype, "section", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => filiere_entity_1.Filiere, filiere => filiere.classes, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "filiereId" }),
    __metadata("design:type", filiere_entity_1.Filiere)
], Classe.prototype, "filiere", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => student_entity_1.Student, student => student.classe),
    __metadata("design:type", Array)
], Classe.prototype, "students", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => teacher_entity_1.Teacher, teacher => teacher.classes),
    __metadata("design:type", Array)
], Classe.prototype, "teachers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => matiere_entity_1.Matiere, matiere => matiere.classe),
    __metadata("design:type", Array)
], Classe.prototype, "matieres", void 0);
exports.Classe = Classe = __decorate([
    (0, typeorm_1.Entity)("classes")
], Classe);
//# sourceMappingURL=classe.entity.js.map