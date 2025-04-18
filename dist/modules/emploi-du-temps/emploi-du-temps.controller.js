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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmploiDuTempsController = void 0;
const common_1 = require("@nestjs/common");
const emploi_du_temps_service_1 = require("./emploi-du-temps.service");
const create_emploi_du_temps_dto_1 = require("./DTO/create-emploi-du-temps.dto");
const update_emploi_du_temps_dto_1 = require("./DTO/update-emploi-du-temps.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_guard_1 = require("../auth/roles.guard");
const roles_decorator_1 = require("../auth/roles.decorator");
const users_entity_1 = require("../users/users.entity");
let EmploiDuTempsController = class EmploiDuTempsController {
    emploiService;
    constructor(emploiService) {
        this.emploiService = emploiService;
    }
    async create(createDto) {
        return await this.emploiService.create(createDto);
    }
    async findAll(query) {
        return await this.emploiService.findAll(query);
    }
    async findOne(id) {
        return await this.emploiService.findOne(id);
    }
    async update(id, updateDto) {
        return await this.emploiService.update(id, updateDto);
    }
    async remove(id) {
        return await this.emploiService.remove(id);
    }
};
exports.EmploiDuTempsController = EmploiDuTempsController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(users_entity_1.Role.ADMIN),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_emploi_du_temps_dto_1.CreateEmploiDuTempsDto]),
    __metadata("design:returntype", Promise)
], EmploiDuTempsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(users_entity_1.Role.ADMIN, users_entity_1.Role.TEACHER, users_entity_1.Role.STUDENT),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmploiDuTempsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, roles_decorator_1.Roles)(users_entity_1.Role.ADMIN, users_entity_1.Role.TEACHER, users_entity_1.Role.STUDENT),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EmploiDuTempsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(":id"),
    (0, roles_decorator_1.Roles)(users_entity_1.Role.ADMIN),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_emploi_du_temps_dto_1.UpdateEmploiDuTempsDto]),
    __metadata("design:returntype", Promise)
], EmploiDuTempsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, roles_decorator_1.Roles)(users_entity_1.Role.ADMIN),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EmploiDuTempsController.prototype, "remove", null);
exports.EmploiDuTempsController = EmploiDuTempsController = __decorate([
    (0, common_1.Controller)("emplois-du-temps"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [emploi_du_temps_service_1.EmploiDuTempsService])
], EmploiDuTempsController);
//# sourceMappingURL=emploi-du-temps.controller.js.map