import { Niveau } from "../niveau/niveau.entity";
import { Section } from "../section/section.entity";
import { Filiere } from "../filiere/filiere.entity";
import { Student } from "../student/student.entity";
import { Teacher } from "../teacher/teacher.entity";
import { Matiere } from "../matiere/matiere.entity";
export declare class Classe {
    id: number;
    nom: string;
    niveau: Niveau;
    section: Section;
    filiere: Filiere;
    students: Student[];
    teachers: Teacher[];
    matieres: Matiere[];
}
