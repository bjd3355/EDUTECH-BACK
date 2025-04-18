import { EmploiDuTempsService } from "./emploi-du-temps.service";
import { CreateEmploiDuTempsDto } from "./DTO/create-emploi-du-temps.dto";
import { UpdateEmploiDuTempsDto } from "./DTO/update-emploi-du-temps.dto";
export declare class EmploiDuTempsController {
    private readonly emploiService;
    constructor(emploiService: EmploiDuTempsService);
    create(createDto: CreateEmploiDuTempsDto): Promise<import("./emploi-du-temps.entity").EmploiDuTemps>;
    findAll(query: any): Promise<import("./emploi-du-temps.entity").EmploiDuTemps[]>;
    findOne(id: number): Promise<import("./emploi-du-temps.entity").EmploiDuTemps>;
    update(id: number, updateDto: UpdateEmploiDuTempsDto): Promise<import("./emploi-du-temps.entity").EmploiDuTemps>;
    remove(id: number): Promise<void>;
}
