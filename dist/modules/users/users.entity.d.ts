import { UserActivity } from "./user-activity.entity";
import { Filiere } from "../filiere/filiere.entity";
export declare enum Role {
    ADMIN = "ADMIN",
    TEACHER = "TEACHER",
    STUDENT = "STUDENT"
}
export declare enum UserStatus {
    ACTIF = "actif",
    INACTIF = "inactif",
    SUSPENDU = "suspendu",
    EN_ATTENTE = "en attente"
}
export declare enum UserGender {
    HOMME = "homme",
    FEMME = "femme",
    AUTRE = "autre"
}
export declare class User {
    id: string;
    nom: string;
    prenom: string;
    email: string;
    password: string;
    filiere: Filiere;
    isDefaultPassword: boolean;
    role: Role;
    status: UserStatus;
    date_inscription: Date;
    derniere_connexion: Date;
    telephone: string;
    adresse: string;
    dateNaissance: string;
    genre: UserGender;
    photo: string;
    activites: UserActivity[];
}
