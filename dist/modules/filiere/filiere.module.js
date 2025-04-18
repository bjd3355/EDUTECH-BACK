"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiliereModule = void 0;
const common_1 = require("@nestjs/common");
const filiere_controller_1 = require("./filiere.controller");
const filiere_service_1 = require("./filiere.service");
const typeorm_1 = require("@nestjs/typeorm");
const filiere_entity_1 = require("./filiere.entity");
let FiliereModule = class FiliereModule {
};
exports.FiliereModule = FiliereModule;
exports.FiliereModule = FiliereModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([filiere_entity_1.Filiere])],
        controllers: [filiere_controller_1.FiliereController],
        providers: [filiere_service_1.FiliereService],
        exports: [filiere_service_1.FiliereService],
    })
], FiliereModule);
//# sourceMappingURL=filiere.module.js.map