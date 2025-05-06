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
exports.ScheduleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const schedule_entity_1 = require("./schedule.entity");
let ScheduleService = class ScheduleService {
    schedRepo;
    constructor(schedRepo) {
        this.schedRepo = schedRepo;
    }
    async create(dto) {
        const sched = this.schedRepo.create({
            weekStart: dto.weekStart,
            weekEnd: dto.weekEnd,
            weekLabel: dto.weekLabel,
            note: dto.note,
            published: dto.published ?? false,
            niveau: { id: dto.niveauId },
            filiere: { id: dto.filiereId },
            section: { id: dto.sectionId },
            events: dto.events.map(e => ({
                date: e.date,
                startTime: e.startTime,
                endTime: e.endTime,
                room: e.room,
                professeur: { id: e.professeurId },
                matiere: { id: e.matiereId },
            })),
        });
        const saved = await this.schedRepo.save(sched);
        return this.transform(saved);
    }
    async findAll(filters) {
        const where = {};
        if (filters.niveauId)
            where.niveau = { id: +filters.niveauId };
        if (filters.filiereId)
            where.filiere = { id: +filters.filiereId };
        if (filters.sectionId)
            where.section = { id: +filters.sectionId };
        const list = await this.schedRepo.find({
            where,
            order: { weekStart: 'DESC' },
        });
        return list.map(s => this.transform(s));
    }
    async findOne(id) {
        const sched = await this.schedRepo.findOne({ where: { id } });
        if (!sched)
            throw new common_1.NotFoundException('Schedule non trouvé');
        return this.transform(sched);
    }
    async update(id, dto) {
        const preload = { id, ...dto };
        if (dto.events) {
            preload.events = dto.events.map(e => ({
                id: e.id,
                date: e.date,
                startTime: e.startTime,
                endTime: e.endTime,
                room: e.room,
                professeur: { id: e.professeurId },
                matiere: { id: e.matiereId },
            }));
        }
        const sched = await this.schedRepo.preload(preload);
        if (!sched)
            throw new common_1.NotFoundException('Schedule non trouvé');
        const saved = await this.schedRepo.save(sched);
        return this.transform(saved);
    }
    async remove(id) {
        const sched = await this.schedRepo.findOne({ where: { id } });
        if (!sched)
            throw new common_1.NotFoundException('Schedule non trouvé');
        await this.schedRepo.remove(sched);
    }
    transform(s) {
        const days = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
        const scheduleMap = days.reduce((acc, d) => ({
            ...acc,
            [d.charAt(0).toUpperCase() + d.slice(1)]: []
        }), {});
        s.events.forEach(evt => {
            const dayName = new Date(evt.date)
                .toLocaleDateString('fr-FR', { weekday: 'long' });
            const key = dayName.charAt(0).toUpperCase() + dayName.slice(1);
            if (!scheduleMap[key])
                return;
            scheduleMap[key].push({
                startTime: evt.startTime,
                endTime: evt.endTime,
                module: evt.matiere.nom,
                professor: evt.professeur.nom,
                room: evt.room || '',
                timeSlot: `${evt.startTime}-${evt.endTime}`,
            });
        });
        return {
            id: s.id,
            niveau: s.niveau.nom,
            filiere: s.filiere.nom,
            section: s.section.nom,
            published: s.published,
            note: s.note,
            weekPeriod: s.weekLabel,
            schedule: scheduleMap,
            daysStatus: Object.keys(scheduleMap)
                .reduce((acc, day) => ({ ...acc, [day]: 'workday' }), {}),
        };
    }
};
exports.ScheduleService = ScheduleService;
exports.ScheduleService = ScheduleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(schedule_entity_1.Schedule)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ScheduleService);
//# sourceMappingURL=schedule.service.js.map