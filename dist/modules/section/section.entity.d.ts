import { Niveau } from "../niveau/niveau.entity";
import { Matiere } from "../matiere/matiere.entity";
import { Classe } from "../classe/classe.entity";
import { Student } from "../student/student.entity";
export declare class Section {
    id: number;
    nom: string;
    niveaux: Niveau[];
    matieres: Matiere[];
    classes: Classe[];
    students: Student[];
}
