export interface JwtPayload {
  sub: number; // L'ID de l'utilisateur
  email: string; // Ajout de l'email
  role: string; // Ajout du rôle pour la gestion des accès
}
