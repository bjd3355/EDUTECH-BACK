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
exports.NiveauController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_guard_1 = require("../auth/roles.guard");
const roles_decorator_1 = require("../auth/roles.decorator");
const users_entity_1 = require("../users/users.entity");
const niveau_service_1 = require("./niveau.service");
let NiveauController = class NiveauController {
    svc;
    constructor(svc) {
        this.svc = svc;
    }
    findAll() {
        return this.svc.findAll();
    }
};
exports.NiveauController = NiveauController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(users_entity_1.Role.ADMIN, users_entity_1.Role.TEACHER, users_entity_1.Role.STUDENT),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NiveauController.prototype, "findAll", null);
exports.NiveauController = NiveauController = __decorate([
    (0, common_1.Controller)('niveaux'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [niveau_service_1.NiveauService])
], NiveauController);
//# sourceMappingURL=niveau.controller.js.map