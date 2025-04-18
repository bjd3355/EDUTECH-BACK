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
const niveau_service_1 = require("./niveau.service");
let NiveauController = class NiveauController {
    niveauService;
    constructor(niveauService) {
        this.niveauService = niveauService;
    }
    findAll() {
        return this.niveauService.findAll();
    }
};
exports.NiveauController = NiveauController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NiveauController.prototype, "findAll", null);
exports.NiveauController = NiveauController = __decorate([
    (0, common_1.Controller)("niveaux"),
    __metadata("design:paramtypes", [niveau_service_1.NiveauService])
], NiveauController);
//# sourceMappingURL=niveau.controller.js.map