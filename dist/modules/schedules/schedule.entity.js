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
exports.Schedule = void 0;
const typeorm_1 = require("typeorm");
const niveau_entity_1 = require("../niveau/niveau.entity");
const filiere_entity_1 = require("../filiere/filiere.entity");
const section_entity_1 = require("../section/section.entity");
const event_entity_1 = require("./event.entity");
let Schedule = class Schedule {
    id;
    weekStart;
    weekEnd;
    weekLabel;
    published;
    note;
    niveau;
    filiere;
    section;
    events;
};
exports.Schedule = Schedule;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Schedule.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Schedule.prototype, "weekStart", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Schedule.prototype, "weekEnd", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Schedule.prototype, "weekLabel", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Schedule.prototype, "published", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Schedule.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => niveau_entity_1.Niveau, { eager: true, nullable: false }),
    __metadata("design:type", niveau_entity_1.Niveau)
], Schedule.prototype, "niveau", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => filiere_entity_1.Filiere, { eager: true, nullable: false }),
    __metadata("design:type", filiere_entity_1.Filiere)
], Schedule.prototype, "filiere", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => section_entity_1.Section, { eager: true, nullable: false }),
    __metadata("design:type", section_entity_1.Section)
], Schedule.prototype, "section", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => event_entity_1.ScheduleEvent, evt => evt.schedule, { cascade: true, eager: true }),
    __metadata("design:type", Array)
], Schedule.prototype, "events", void 0);
exports.Schedule = Schedule = __decorate([
    (0, typeorm_1.Entity)('schedules')
], Schedule);
//# sourceMappingURL=schedule.entity.js.map