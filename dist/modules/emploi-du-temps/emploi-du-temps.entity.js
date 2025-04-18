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
exports.EmploiDuTemps = void 0;
const typeorm_1 = require("typeorm");
const users_entity_1 = require("../users/users.entity");
const filiere_entity_1 = require("../filiere/filiere.entity");
const matiere_entity_1 = require("../matiere/matiere.entity");
const niveau_entity_1 = require("../niveau/niveau.entity");
const section_entity_1 = require("../section/section.entity");
let EmploiDuTemps = class EmploiDuTemps {
    id;
    date;
    heureDebut;
    heureFin;
    module;
    professeur;
    filiere;
    matiere;
    niveau;
    section;
};
exports.EmploiDuTemps = EmploiDuTemps;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], EmploiDuTemps.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date" }),
    __metadata("design:type", Date)
], EmploiDuTemps.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "time" }),
    __metadata("design:type", String)
], EmploiDuTemps.prototype, "heureDebut", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "time" }),
    __metadata("design:type", String)
], EmploiDuTemps.prototype, "heureFin", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EmploiDuTemps.prototype, "module", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.User, { eager: true }),
    __metadata("design:type", users_entity_1.User)
], EmploiDuTemps.prototype, "professeur", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => filiere_entity_1.Filiere, (filiere) => filiere.emploisDuTemps, {
        eager: true,
        nullable: true,
    }),
    __metadata("design:type", filiere_entity_1.Filiere)
], EmploiDuTemps.prototype, "filiere", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => matiere_entity_1.Matiere, (matiere) => matiere.emploisDuTemps, {
        eager: true,
        nullable: true,
    }),
    __metadata("design:type", matiere_entity_1.Matiere)
], EmploiDuTemps.prototype, "matiere", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => niveau_entity_1.Niveau, (niveau) => niveau.emploisDuTemps, {
        eager: true,
        nullable: true,
    }),
    __metadata("design:type", niveau_entity_1.Niveau)
], EmploiDuTemps.prototype, "niveau", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => section_entity_1.Section, (section) => section.emploisDuTemps, {
        eager: true,
        nullable: true,
    }),
    __metadata("design:type", section_entity_1.Section)
], EmploiDuTemps.prototype, "section", void 0);
exports.EmploiDuTemps = EmploiDuTemps = __decorate([
    (0, typeorm_1.Entity)("emplois_du_temps")
], EmploiDuTemps);
//# sourceMappingURL=emploi-du-temps.entity.js.map