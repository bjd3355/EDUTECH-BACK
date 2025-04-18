import { Repository } from "typeorm";
import { EmploiDuTemps } from "./emploi-du-temps.entity";
import { CreateEmploiDuTempsDto } from "./DTO/create-emploi-du-temps.dto";
import { UpdateEmploiDuTempsDto } from "./DTO/update-emploi-du-temps.dto";
import { GoogleAgendaService } from "../../google-agenda/google-agenda.service";
export declare class EmploiDuTempsService {
    private emploiRepo;
    private googleAgendaService;
    constructor(emploiRepo: Repository<EmploiDuTemps>, googleAgendaService: GoogleAgendaService);
    create(createDto: CreateEmploiDuTempsDto): Promise<EmploiDuTemps>;
    findAll(filters?: any): Promise<EmploiDuTemps[]>;
    findOne(id: number): Promise<EmploiDuTemps>;
    update(id: number, updateDto: UpdateEmploiDuTempsDto): Promise<EmploiDuTemps>;
    remove(id: number): Promise<void>;
}
