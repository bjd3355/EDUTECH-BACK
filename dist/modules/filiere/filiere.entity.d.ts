import { EmploiDuTemps } from "../emploi-du-temps/emploi-du-temps.entity";
import { Teacher } from "../teacher/teacher.entity";
import { Student } from "../student/student.entity";
import { Niveau } from "../niveau/niveau.entity";
export declare class Filiere {
    id: number;
    nom: string;
    emploisDuTemps: EmploiDuTemps[];
    teachers: Teacher[];
    students: Student[];
    niveaux: Niveau[];
}
