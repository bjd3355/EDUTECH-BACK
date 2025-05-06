"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualClassesModule = void 0;
const common_1 = require("@nestjs/common");
const virtual_classes_controller_1 = require("./virtual-classes.controller");
const virtual_classes_service_1 = require("./virtual-classes.service");
let VirtualClassesModule = class VirtualClassesModule {
};
exports.VirtualClassesModule = VirtualClassesModule;
exports.VirtualClassesModule = VirtualClassesModule = __decorate([
    (0, common_1.Module)({
        controllers: [virtual_classes_controller_1.VirtualClassesController],
        providers: [virtual_classes_service_1.VirtualClassesService],
    })
], VirtualClassesModule);
//# sourceMappingURL=virtual-classes.module.js.map