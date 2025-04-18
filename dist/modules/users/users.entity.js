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
exports.User = exports.UserGender = exports.UserStatus = exports.Role = void 0;
const typeorm_1 = require("typeorm");
const user_activity_entity_1 = require("./user-activity.entity");
const filiere_entity_1 = require("../filiere/filiere.entity");
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["TEACHER"] = "TEACHER";
    Role["STUDENT"] = "STUDENT";
})(Role || (exports.Role = Role = {}));
var UserStatus;
(function (UserStatus) {
    UserStatus["ACTIF"] = "actif";
    UserStatus["INACTIF"] = "inactif";
    UserStatus["SUSPENDU"] = "suspendu";
    UserStatus["EN_ATTENTE"] = "en attente";
})(UserStatus || (exports.UserStatus = UserStatus = {}));
var UserGender;
(function (UserGender) {
    UserGender["HOMME"] = "homme";
    UserGender["FEMME"] = "femme";
    UserGender["AUTRE"] = "autre";
})(UserGender || (exports.UserGender = UserGender = {}));
let User = class User {
    id;
    nom;
    prenom;
    email;
    password;
    filiere;
    isDefaultPassword;
    role;
    status;
    date_inscription;
    derniere_connexion;
    telephone;
    adresse;
    dateNaissance;
    genre;
    photo;
    activites;
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "nom", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "prenom", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => filiere_entity_1.Filiere, (filiere) => filiere.students, {
        eager: true,
        nullable: true,
    }),
    __metadata("design:type", filiere_entity_1.Filiere)
], User.prototype, "filiere", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "isDefaultPassword", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: Role,
        default: Role.STUDENT,
    }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: UserStatus,
        default: UserStatus.EN_ATTENTE,
    }),
    __metadata("design:type", String)
], User.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "datetime",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], User.prototype, "date_inscription", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "datetime",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], User.prototype, "derniere_connexion", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "telephone", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "adresse", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date", nullable: true, name: "date_naissance" }),
    __metadata("design:type", String)
], User.prototype, "dateNaissance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: UserGender, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "genre", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "photo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_activity_entity_1.UserActivity, (activity) => activity.user, {
        cascade: true,
        eager: true,
    }),
    __metadata("design:type", Array)
], User.prototype, "activites", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)("users")
], User);
//# sourceMappingURL=users.entity.js.map