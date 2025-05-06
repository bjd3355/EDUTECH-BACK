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
exports.Matiere = void 0;
const typeorm_1 = require("typeorm");
const section_entity_1 = require("../section/section.entity");
const teacher_entity_1 = require("../teacher/teacher.entity");
const classe_entity_1 = require("../classe/classe.entity");
const filiere_entity_1 = require("../filiere/filiere.entity");
let Matiere = class Matiere {
    id;
    nom;
    professeurs;
    section;
    classe;
    filiere;
};
exports.Matiere = Matiere;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "matiereId" }),
    __metadata("design:type", Number)
], Matiere.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Matiere.prototype, "nom", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => teacher_entity_1.Teacher, teacher => teacher.matieres),
    (0, typeorm_1.JoinTable)({
        name: "matiere_teachers",
        joinColumn: { name: "matiereId", referencedColumnName: "id" },
        inverseJoinColumn: { name: "teacherId", referencedColumnName: "id" },
    }),
    __metadata("design:type", Array)
], Matiere.prototype, "professeurs", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => section_entity_1.Section, section => section.matieres, { nullable: true }),
    __metadata("design:type", section_entity_1.Section)
], Matiere.prototype, "section", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => classe_entity_1.Classe, classe => classe.matieres, { nullable: false }),
    __metadata("design:type", classe_entity_1.Classe)
], Matiere.prototype, "classe", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => filiere_entity_1.Filiere, { nullable: false }),
    __metadata("design:type", filiere_entity_1.Filiere)
], Matiere.prototype, "filiere", void 0);
exports.Matiere = Matiere = __decorate([
    (0, typeorm_1.Entity)("matieres")
], Matiere);
//# sourceMappingURL=matiere.entity.js.map