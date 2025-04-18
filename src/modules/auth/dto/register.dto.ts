import { Role } from "../../users/users.entity";

export interface RegisterDto {
  // Champs obligatoires communs
  nom: string;
  prenom: string;
  email: string;
  password?: string;
  role: Role;

  // Champs communs optionnels (issus de CreateUserDto)
  telephone?: string;
  adresse?: string;
  dateNaissance?: string;
  dateInscription?: string;
  derniereConnexion?: string;
  genre?: string;
  photo?: string;

  // Propriétés optionnelles spécifiques aux enseignants (Teacher)
  filieres?: string[];
  classes?: string[]; // Liste des classes concernées
  modules?: string[]; // Liste des modules concernés
  status?: string; // Statut de l'enseignant
  filiereId?: string; // Pour identifier la filière (en Teacher, c'est une chaîne)

  // Propriétés optionnelles spécifiques aux étudiants (Student)
  classe?: string; // Classe de l'étudiant
  niveau?: string; // Niveau d'études
  sectionId?: string; // Identifiant de la section (sera converti si nécessaire)
  numero_etudiant?: string;
  grade?: string;
  specialite?: string;
  // Note : pour les étudiants, la filière peut aussi être nécessaire.
  // Si besoin, vous pouvez ajouter une propriété 'filiereId' ou 'filiere' ici,
  // en veillant à harmoniser son type (number pour CreateStudentDto vs string pour CreateTeacherDto).
}
