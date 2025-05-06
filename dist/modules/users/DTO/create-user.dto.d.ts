import { Role, UserStatus, UserGender } from "../users.entity";
export declare class CreateUserDto {
    nom: string;
    prenom: string;
    email: string;
    password: string;
    isDefaultPassword?: boolean;
    role: Role;
    filiereId?: number;
    status?: UserStatus;
    dateInscription?: string;
    derniereConnexion?: string;
    telephone?: string;
    adresse?: string;
    dateNaissance?: string;
    genre?: UserGender;
    photo?: string;
}
