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
exports.QcmController = void 0;
const common_1 = require("@nestjs/common");
const qcm_service_1 = require("./qcm.service");
let QcmController = class QcmController {
    qcmService;
    constructor(qcmService) {
        this.qcmService = qcmService;
    }
    findAll() {
        return this.qcmService.findAll();
    }
};
exports.QcmController = QcmController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], QcmController.prototype, "findAll", null);
exports.QcmController = QcmController = __decorate([
    (0, common_1.Controller)("qcm"),
    __metadata("design:paramtypes", [qcm_service_1.QcmService])
], QcmController);
//# sourceMappingURL=qcm.controller.js.map