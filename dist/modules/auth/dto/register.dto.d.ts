import { Role } from "../../users/users.entity";
export interface RegisterDto {
    nom: string;
    prenom: string;
    email: string;
    password?: string;
    role: Role;
    telephone?: string;
    adresse?: string;
    dateNaissance?: string;
    dateInscription?: string;
    derniereConnexion?: string;
    genre?: string;
    photo?: string;
    filieres?: string[];
    classes?: string[];
    modules?: string[];
    status?: string;
    filiereId?: string;
    classe?: string;
    niveau?: string;
    sectionId?: string;
    numero_etudiant?: string;
    grade?: string;
    specialite?: string;
}
