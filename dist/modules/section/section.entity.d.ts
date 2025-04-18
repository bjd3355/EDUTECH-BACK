import { Niveau } from "../niveau/niveau.entity";
import { EmploiDuTemps } from "../emploi-du-temps/emploi-du-temps.entity";
import { Matiere } from "../matiere/matiere.entity";
export declare class Section {
    id: number;
    nom: string;
    niveau: Niveau;
    emploisDuTemps: EmploiDuTemps[];
    matieres: Matiere[];
}
