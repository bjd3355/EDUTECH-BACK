import { Teacher } from "../teacher/teacher.entity";
import { Student } from "../student/student.entity";
import { statusCours } from "./interface/cours.enum";
export declare class Cours {
    id_cours: string;
    titre: string;
    description: string;
    dateCreation: Date;
    duree: string;
    support: string;
    professeur: Teacher;
    filiere: string;
    classe: string;
    image: string;
    student: Student[];
    status: statusCours;
}
