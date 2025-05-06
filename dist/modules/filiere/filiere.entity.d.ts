import { Teacher } from "../teacher/teacher.entity";
import { Student } from "../student/student.entity";
import { Niveau } from "../niveau/niveau.entity";
import { Classe } from "../classe/classe.entity";
import { Matiere } from "../matiere/matiere.entity";
export declare class Filiere {
    id: number;
    nom: string;
    teachers: Teacher[];
    students: Student[];
    niveaux: Niveau[];
    classes: Classe[];
    matieres: Matiere[];
}
