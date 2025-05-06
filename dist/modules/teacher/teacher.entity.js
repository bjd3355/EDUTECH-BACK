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
exports.Teacher = exports.TeacherStatus = void 0;
const typeorm_1 = require("typeorm");
const filiere_entity_1 = require("../filiere/filiere.entity");
const users_entity_1 = require("../users/users.entity");
const cours_entity_1 = require("../cours/cours.entity");
const classe_entity_1 = require("../classe/classe.entity");
const matiere_entity_1 = require("../matiere/matiere.entity");
var TeacherStatus;
(function (TeacherStatus) {
    TeacherStatus["AVAILABLE"] = "AVAILABLE";
    TeacherStatus["UNAVAILABLE"] = "UNAVAILABLE";
})(TeacherStatus || (exports.TeacherStatus = TeacherStatus = {}));
let Teacher = class Teacher {
    id;
    professeurId;
    user;
    nom;
    prenom;
    email;
    password;
    filieres;
    grade;
    specialite;
    classes;
    matieres;
    modules;
    status;
    telephone;
    adresse;
    dateNaissance;
    photo;
    date_inscription;
    derniere_connexion;
    cours;
};
exports.Teacher = Teacher;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Teacher.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Teacher.prototype, "professeurId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => users_entity_1.User, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", users_entity_1.User)
], Teacher.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Teacher.prototype, "nom", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Teacher.prototype, "prenom", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Teacher.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Teacher.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => filiere_entity_1.Filiere, filiere => filiere.teachers, { eager: true, cascade: true }),
    (0, typeorm_1.JoinTable)({
        name: "teacher_filieres",
        joinColumn: { name: "teacherId", referencedColumnName: "id" },
        inverseJoinColumn: { name: "filiereId", referencedColumnName: "id" },
    }),
    __metadata("design:type", Array)
], Teacher.prototype, "filieres", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Teacher.prototype, "grade", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Teacher.prototype, "specialite", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => classe_entity_1.Classe, classe => classe.teachers, { eager: true }),
    (0, typeorm_1.JoinTable)({
        name: "teacher_classes",
        joinColumn: { name: "teacherId", referencedColumnName: "id" },
        inverseJoinColumn: { name: "classeId", referencedColumnName: "id" },
    }),
    __metadata("design:type", Array)
], Teacher.prototype, "classes", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => matiere_entity_1.Matiere, matiere => matiere.professeurs),
    (0, typeorm_1.JoinTable)({
        name: "teacher_matieres",
        joinColumn: { name: "teacherId", referencedColumnName: "id" },
        inverseJoinColumn: { name: "matiereId", referencedColumnName: "id" },
    }),
    __metadata("design:type", Array)
], Teacher.prototype, "matieres", void 0);
__decorate([
    (0, typeorm_1.Column)("simple-array", { nullable: true }),
    __metadata("design:type", Array)
], Teacher.prototype, "modules", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: TeacherStatus, default: TeacherStatus.AVAILABLE }),
    __metadata("design:type", String)
], Teacher.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Teacher.prototype, "telephone", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Teacher.prototype, "adresse", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date", nullable: true }),
    __metadata("design:type", String)
], Teacher.prototype, "dateNaissance", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Teacher.prototype, "photo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Teacher.prototype, "date_inscription", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", nullable: true, default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Teacher.prototype, "derniere_connexion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cours_entity_1.Cours, cours => cours.professeur),
    __metadata("design:type", Array)
], Teacher.prototype, "cours", void 0);
exports.Teacher = Teacher = __decorate([
    (0, typeorm_1.Entity)("teachers")
], Teacher);
//# sourceMappingURL=teacher.entity.js.map