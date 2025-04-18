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
const emploi_du_temps_entity_1 = require("../emploi-du-temps/emploi-du-temps.entity");
const matiere_entity_1 = require("../matiere/matiere.entity");
let Section = class Section {
    id;
    nom;
    niveau;
    emploisDuTemps;
    matieres;
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
    (0, typeorm_1.ManyToOne)(() => niveau_entity_1.Niveau, (niveau) => niveau.sections, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", niveau_entity_1.Niveau)
], Section.prototype, "niveau", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => emploi_du_temps_entity_1.EmploiDuTemps, (emploi) => emploi.section),
    __metadata("design:type", Array)
], Section.prototype, "emploisDuTemps", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => matiere_entity_1.Matiere, (matiere) => matiere.section),
    __metadata("design:type", Array)
], Section.prototype, "matieres", void 0);
exports.Section = Section = __decorate([
    (0, typeorm_1.Entity)("sections")
], Section);
//# sourceMappingURL=section.entity.js.map