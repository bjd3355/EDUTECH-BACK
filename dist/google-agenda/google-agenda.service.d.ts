import { EmploiDuTemps } from "../modules/emploi-du-temps/emploi-du-temps.entity";
export declare class GoogleAgendaService {
    createOrUpdateEvent(emploi: EmploiDuTemps): Promise<void>;
    deleteEvent(emploi: EmploiDuTemps): Promise<void>;
}
