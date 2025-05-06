import { Filiere } from "../filiere/filiere.entity";
import { Section } from "../section/section.entity";
import { User } from "../users/users.entity";
import { Cours } from "../cours/cours.entity";
import { Classe } from "../classe/classe.entity";
export declare class Student {
    id: string;
    user: User;
    nom: string;
    prenom: string;
    email: string;
    password: string;
    classe: Classe;
    section: Section;
    filiere: Filiere;
    telephone: string;
    adresse: string;
    dateNaissance: string;
    photo: string;
    date_inscription: Date;
    derniere_connexion: Date;
    genre: string;
    cours: Cours[];
}
