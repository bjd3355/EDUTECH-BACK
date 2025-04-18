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
const users_entity_1 = require("../users/users.entity");
const section_entity_1 = require("../section/section.entity");
const emploi_du_temps_entity_1 = require("../emploi-du-temps/emploi-du-temps.entity");
let Matiere = class Matiere {
    id;
    nom;
    professeur;
    section;
    emploisDuTemps;
};
exports.Matiere = Matiere;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Matiere.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Matiere.prototype, "nom", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.User, { nullable: true, eager: true }),
    __metadata("design:type", users_entity_1.User)
], Matiere.prototype, "professeur", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => section_entity_1.Section, (section) => section.matieres, { nullable: true }),
    __metadata("design:type", section_entity_1.Section)
], Matiere.prototype, "section", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => emploi_du_temps_entity_1.EmploiDuTemps, (emploiDuTemps) => emploiDuTemps.matiere),
    __metadata("design:type", Array)
], Matiere.prototype, "emploisDuTemps", void 0);
exports.Matiere = Matiere = __decorate([
    (0, typeorm_1.Entity)("matieres")
], Matiere);
//# sourceMappingURL=matiere.entity.js.map