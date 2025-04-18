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
exports.EmploiDuTempsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const emploi_du_temps_entity_1 = require("./emploi-du-temps.entity");
const google_agenda_service_1 = require("../../google-agenda/google-agenda.service");
let EmploiDuTempsService = class EmploiDuTempsService {
    emploiRepo;
    googleAgendaService;
    constructor(emploiRepo, googleAgendaService) {
        this.emploiRepo = emploiRepo;
        this.googleAgendaService = googleAgendaService;
    }
    async create(createDto) {
        const conflit = await this.emploiRepo
            .createQueryBuilder("emploi")
            .where("emploi.professeur = :professeur", {
            professeur: createDto.professeur,
        })
            .andWhere("emploi.date = :date", { date: createDto.date })
            .andWhere("(emploi.heureDebut < :heureFin AND emploi.heureFin > :heureDebut)", {
            heureDebut: createDto.heureDebut,
            heureFin: createDto.heureFin,
        })
            .getOne();
        if (conflit) {
            throw new common_1.BadRequestException("Conflit de planning pour ce professeur.");
        }
        const emploiData = {
            ...createDto,
            professeur: { id: createDto.professeur },
            filiere: createDto.filiere
                ? { id: createDto.filiere }
                : undefined,
            matiere: createDto.matiere
                ? { id: createDto.matiere }
                : undefined,
            niveau: createDto.niveau ? { id: createDto.niveau } : undefined,
            section: createDto.section
                ? { id: createDto.section }
                : undefined,
        };
        const emploi = this.emploiRepo.create(emploiData);
        const emploiCree = await this.emploiRepo.save(emploi);
        await this.googleAgendaService.createOrUpdateEvent(emploiCree);
        return emploiCree;
    }
    async findAll(filters) {
        const query = this.emploiRepo.createQueryBuilder("emploi");
        if (filters.date) {
            query.andWhere("emploi.date = :date", { date: filters.date });
        }
        if (filters.professeur) {
            query.andWhere("emploi.professeur = :professeur", {
                professeur: filters.professeur,
            });
        }
        if (filters.module) {
            query.andWhere("emploi.module = :module", { module: filters.module });
        }
        return await query.getMany();
    }
    async findOne(id) {
        const emploi = await this.emploiRepo.findOne({ where: { id } });
        if (!emploi) {
            throw new common_1.NotFoundException("Emploi du temps non trouvé");
        }
        return emploi;
    }
    async update(id, updateDto) {
        const emploi = await this.findOne(id);
        if (updateDto.date || updateDto.heureDebut || updateDto.heureFin) {
            const nouvelleDate = updateDto.date || emploi.date;
            const nouvelleHeureDebut = updateDto.heureDebut || emploi.heureDebut;
            const nouvelleHeureFin = updateDto.heureFin || emploi.heureFin;
            const conflit = await this.emploiRepo
                .createQueryBuilder("emploi")
                .where("emploi.professeur = :professeur", {
                professeur: emploi.professeur.id,
            })
                .andWhere("emploi.date = :date", { date: nouvelleDate })
                .andWhere("emploi.id != :id", { id })
                .andWhere("(emploi.heureDebut < :heureFin AND emploi.heureFin > :heureDebut)", {
                heureDebut: nouvelleHeureDebut,
                heureFin: nouvelleHeureFin,
            })
                .getOne();
            if (conflit) {
                throw new common_1.BadRequestException("Conflit de planning pour ce professeur.");
            }
        }
        if (updateDto.professeur) {
            updateDto = {
                ...updateDto,
                professeur: { id: updateDto.professeur },
            };
        }
        const emploiModifie = Object.assign(emploi, updateDto);
        const emploiSauve = await this.emploiRepo.save(emploiModifie);
        await this.googleAgendaService.createOrUpdateEvent(emploiSauve);
        return emploiSauve;
    }
    async remove(id) {
        const emploi = await this.findOne(id);
        await this.emploiRepo.remove(emploi);
        await this.googleAgendaService.deleteEvent(emploi);
    }
};
exports.EmploiDuTempsService = EmploiDuTempsService;
exports.EmploiDuTempsService = EmploiDuTempsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(emploi_du_temps_entity_1.EmploiDuTemps)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        google_agenda_service_1.GoogleAgendaService])
], EmploiDuTempsService);
//# sourceMappingURL=emploi-du-temps.service.js.map