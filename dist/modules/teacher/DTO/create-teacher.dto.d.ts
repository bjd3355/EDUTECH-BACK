import { TeacherStatus } from "../teacher.entity";
export declare class CreateTeacherDto {
    nom: string;
    prenom: string;
    email: string;
    password?: string;
    filieres?: string[];
    telephone?: string;
    adresse?: string;
    grade?: string;
    specialite?: string;
    classes?: string[];
    modules?: string[];
    dateNaissance?: string;
    photo?: string;
    dateInscription?: string;
    derniereConnexion?: string;
    status?: TeacherStatus;
}
