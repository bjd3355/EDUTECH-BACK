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
exports.CoursController = void 0;
const common_1 = require("@nestjs/common");
const cours_service_1 = require("./cours.service");
const cours_entity_1 = require("./cours.entity");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
let CoursController = class CoursController {
    coursService;
    constructor(coursService) {
        this.coursService = coursService;
    }
    async findProfCours(id_prof) {
        return await this.coursService.teacherCours(id_prof);
    }
    async findAllCours() {
        return await this.coursService.findAllCours();
    }
    async findCours(id) {
        return await this.coursService.findCours(id);
    }
    uploadFile(file) {
        return "go !";
    }
    async newCours(cours, file) {
        return await this.coursService.createCours(cours);
    }
    async updateCours(id, cours) {
        return this.coursService.updateCours(id, cours);
    }
    async deleteCours(id) {
        this.coursService.deleteCours(id);
    }
};
exports.CoursController = CoursController;
__decorate([
    (0, common_1.Get)('professeur/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CoursController.prototype, "findProfCours", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CoursController.prototype, "findAllCours", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CoursController.prototype, "findCours", null);
__decorate([
    (0, common_1.Post)('upload/support'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', { storage: (0, multer_1.diskStorage)({ destination: 'upload/support/',
            filename: function (req, file, cb) {
                cb(null, file.originalname);
            }
        }) })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CoursController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('imageCours')),
    __param(0, (0, common_1.Body)('cours')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cours_entity_1.Cours, Object]),
    __metadata("design:returntype", Promise)
], CoursController.prototype, "newCours", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('cours')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CoursController.prototype, "updateCours", null);
__decorate([
    (0, common_1.Delete)('id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CoursController.prototype, "deleteCours", null);
exports.CoursController = CoursController = __decorate([
    (0, common_1.Controller)('cours'),
    __metadata("design:paramtypes", [cours_service_1.CoursService])
], CoursController);
//# sourceMappingURL=cours.controller.js.map