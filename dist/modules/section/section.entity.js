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
exports.Section = void 0;
const typeorm_1 = require("typeorm");
const niveau_entity_1 = require("../niveau/niveau.entity");
const matiere_entity_1 = require("../matiere/matiere.entity");
const classe_entity_1 = require("../classe/classe.entity");
const student_entity_1 = require("../student/student.entity");
let Section = class Section {
    id;
    nom;
    niveaux;
    matieres;
    classes;
    students;
};
exports.Section = Section;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Section.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Section.prototype, "nom", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => niveau_entity_1.Niveau, niveau => niveau.sections),
    (0, typeorm_1.JoinTable)({ name: "section_niveaux" }),
    __metadata("design:type", Array)
], Section.prototype, "niveaux", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => matiere_entity_1.Matiere, matiere => matiere.section),
    __metadata("design:type", Array)
], Section.prototype, "matieres", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => classe_entity_1.Classe, classe => classe.section),
    __metadata("design:type", Array)
], Section.prototype, "classes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => student_entity_1.Student, (student) => student.section),
    __metadata("design:type", Array)
], Section.prototype, "students", void 0);
exports.Section = Section = __decorate([
    (0, typeorm_1.Entity)("sections")
], Section);
//# sourceMappingURL=section.entity.js.map