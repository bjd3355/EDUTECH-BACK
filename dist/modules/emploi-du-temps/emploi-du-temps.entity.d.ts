import { User } from "../users/users.entity";
import { Filiere } from "../filiere/filiere.entity";
import { Matiere } from "../matiere/matiere.entity";
import { Niveau } from "../niveau/niveau.entity";
import { Section } from "../section/section.entity";
export declare class EmploiDuTemps {
    id: number;
    date: Date;
    heureDebut: string;
    heureFin: string;
    module: string;
    professeur: User;
    filiere: Filiere;
    matiere: Matiere;
    niveau: Niveau;
    section: Section;
}
