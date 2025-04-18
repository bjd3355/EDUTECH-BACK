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
exports.Niveau = void 0;
const typeorm_1 = require("typeorm");
const filiere_entity_1 = require("../filiere/filiere.entity");
const emploi_du_temps_entity_1 = require("../emploi-du-temps/emploi-du-temps.entity");
const section_entity_1 = require("../section/section.entity");
let Niveau = class Niveau {
    id;
    nom;
    filiere;
    emploisDuTemps;
    sections;
};
exports.Niveau = Niveau;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Niveau.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Niveau.prototype, "nom", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => filiere_entity_1.Filiere, (filiere) => filiere.niveaux, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", filiere_entity_1.Filiere)
], Niveau.prototype, "filiere", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => emploi_du_temps_entity_1.EmploiDuTemps, (emploi) => emploi.niveau),
    __metadata("design:type", Array)
], Niveau.prototype, "emploisDuTemps", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => section_entity_1.Section, (section) => section.niveau),
    __metadata("design:type", Array)
], Niveau.prototype, "sections", void 0);
exports.Niveau = Niveau = __decorate([
    (0, typeorm_1.Entity)("niveaux")
], Niveau);
//# sourceMappingURL=niveau.entity.js.map