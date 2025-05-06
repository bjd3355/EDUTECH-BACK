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
exports.Availability = void 0;
const typeorm_1 = require("typeorm");
const teacher_entity_1 = require("../teacher/teacher.entity");
let Availability = class Availability {
    id;
    professeur;
    date;
    startTime;
    endTime;
    type;
};
exports.Availability = Availability;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Availability.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => teacher_entity_1.Teacher, { eager: true, nullable: false }),
    __metadata("design:type", teacher_entity_1.Teacher)
], Availability.prototype, "professeur", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Availability.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time' }),
    __metadata("design:type", String)
], Availability.prototype, "startTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time' }),
    __metadata("design:type", String)
], Availability.prototype, "endTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ['available', 'blocked'], default: 'available' }),
    __metadata("design:type", String)
], Availability.prototype, "type", void 0);
exports.Availability = Availability = __decorate([
    (0, typeorm_1.Entity)('professor_availabilities')
], Availability);
//# sourceMappingURL=availability.entity.js.map