import { Section } from "../section/section.entity";
import { Teacher } from "../teacher/teacher.entity";
import { Classe } from "../classe/classe.entity";
import { Filiere } from "../filiere/filiere.entity";
export declare class Matiere {
    id: number;
    nom: string;
    professeurs: Teacher[];
    section: Section;
    classe: Classe;
    filiere: Filiere;
}
