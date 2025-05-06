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
exports.Student = void 0;
const typeorm_1 = require("typeorm");
const filiere_entity_1 = require("../filiere/filiere.entity");
const section_entity_1 = require("../section/section.entity");
const users_entity_1 = require("../users/users.entity");
const cours_entity_1 = require("../cours/cours.entity");
const classe_entity_1 = require("../classe/classe.entity");
let Student = class Student {
    id;
    user;
    nom;
    prenom;
    email;
    password;
    classe;
    section;
    filiere;
    telephone;
    adresse;
    dateNaissance;
    photo;
    date_inscription;
    derniere_connexion;
    genre;
    cours;
};
exports.Student = Student;
__decorate([
    (0, typeorm_1.PrimaryColumn)("uuid"),
    __metadata("design:type", String)
], Student.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => users_entity_1.User, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "id" }),
    __metadata("design:type", users_entity_1.User)
], Student.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Student.prototype, "nom", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Student.prototype, "prenom", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Student.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Student.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => classe_entity_1.Classe, classe => classe.students, {
        eager: true,
        nullable: true,
        onDelete: "SET NULL"
    }),
    (0, typeorm_1.JoinColumn)({ name: "classeId" }),
    __metadata("design:type", classe_entity_1.Classe)
], Student.prototype, "classe", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => section_entity_1.Section, section => section.students, { eager: true, nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: "sectionId" }),
    __metadata("design:type", section_entity_1.Section)
], Student.prototype, "section", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => filiere_entity_1.Filiere, filiere => filiere.students, { eager: true, nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: "filiereId" }),
    __metadata("design:type", filiere_entity_1.Filiere)
], Student.prototype, "filiere", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Student.prototype, "telephone", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Student.prototype, "adresse", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date", nullable: true }),
    __metadata("design:type", String)
], Student.prototype, "dateNaissance", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Student.prototype, "photo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Student.prototype, "date_inscription", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", nullable: true, default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Student.prototype, "derniere_connexion", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Student.prototype, "genre", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => cours_entity_1.Cours, cours => cours.student),
    __metadata("design:type", Array)
], Student.prototype, "cours", void 0);
exports.Student = Student = __decorate([
    (0, typeorm_1.Entity)("students")
], Student);
//# sourceMappingURL=student.entity.js.map