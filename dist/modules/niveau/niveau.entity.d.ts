import { Filiere } from "../filiere/filiere.entity";
import { EmploiDuTemps } from "../emploi-du-temps/emploi-du-temps.entity";
import { Section } from "../section/section.entity";
export declare class Niveau {
    id: number;
    nom: string;
    filiere: Filiere;
    emploisDuTemps: EmploiDuTemps[];
    sections: Section[];
}
