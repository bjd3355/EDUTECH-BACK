import { User } from "../users/users.entity";
import { Section } from "../section/section.entity";
import { EmploiDuTemps } from "../emploi-du-temps/emploi-du-temps.entity";
export declare class Matiere {
    id: number;
    nom: string;
    professeur: User;
    section: Section;
    emploisDuTemps: EmploiDuTemps[];
}
