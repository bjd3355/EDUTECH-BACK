import { Filiere } from "../filiere/filiere.entity";
import { User } from "../users/users.entity";
import { Cours } from "../cours/cours.entity";
import { Classe } from "../classe/classe.entity";
import { Matiere } from "../matiere/matiere.entity";
export declare enum TeacherStatus {
    AVAILABLE = "AVAILABLE",
    UNAVAILABLE = "UNAVAILABLE"
}
export declare class Teacher {
    id: string;
    professeurId: string;
    user: User;
    nom: string;
    prenom: string;
    email: string;
    password: string;
    filieres: Filiere[];
    grade?: string;
    specialite?: string;
    classes: Classe[];
    matieres: Matiere[];
    modules: string[];
    status: TeacherStatus;
    telephone: string;
    adresse: string;
    dateNaissance: string;
    photo: string;
    date_inscription: Date;
    derniere_connexion: Date;
    cours: Cours[];
}
