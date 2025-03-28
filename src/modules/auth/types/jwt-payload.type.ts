// src/modules/auth/types/jwt-payload.type.ts
import { Role } from '../../users/users.entity';

export interface JwtPayload {
  sub: number;    // L'ID de l'utilisateur
  email: string;
  role: Role;
  iat?: number;
  exp?: number;
}
