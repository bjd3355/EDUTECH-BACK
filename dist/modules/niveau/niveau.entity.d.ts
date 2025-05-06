import { Classe } from "../classe/classe.entity";
import { Section } from "../section/section.entity";
import { Filiere } from "../filiere/filiere.entity";
export declare class Niveau {
    id: number;
    nom: string;
    sections: Section[];
    filieres: Filiere[];
    classes: Classe[];
}
