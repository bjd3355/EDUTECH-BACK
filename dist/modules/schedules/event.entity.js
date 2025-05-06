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
exports.ScheduleEvent = void 0;
const typeorm_1 = require("typeorm");
const teacher_entity_1 = require("../teacher/teacher.entity");
const matiere_entity_1 = require("../matiere/matiere.entity");
const schedule_entity_1 = require("./schedule.entity");
let ScheduleEvent = class ScheduleEvent {
    id;
    date;
    startTime;
    endTime;
    room;
    professeur;
    matiere;
    schedule;
    professeurId;
};
exports.ScheduleEvent = ScheduleEvent;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ScheduleEvent.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], ScheduleEvent.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time' }),
    __metadata("design:type", String)
], ScheduleEvent.prototype, "startTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time' }),
    __metadata("design:type", String)
], ScheduleEvent.prototype, "endTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ScheduleEvent.prototype, "room", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => teacher_entity_1.Teacher, { eager: true, nullable: false }),
    __metadata("design:type", teacher_entity_1.Teacher)
], ScheduleEvent.prototype, "professeur", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => matiere_entity_1.Matiere, { eager: true, nullable: false }),
    __metadata("design:type", matiere_entity_1.Matiere)
], ScheduleEvent.prototype, "matiere", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => schedule_entity_1.Schedule, sched => sched.events, { onDelete: 'CASCADE' }),
    __metadata("design:type", schedule_entity_1.Schedule)
], ScheduleEvent.prototype, "schedule", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], ScheduleEvent.prototype, "professeurId", void 0);
exports.ScheduleEvent = ScheduleEvent = __decorate([
    (0, typeorm_1.Entity)('schedule_events')
], ScheduleEvent);
//# sourceMappingURL=event.entity.js.map