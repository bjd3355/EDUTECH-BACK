import { Role } from "../../users/users.entity";
export interface JwtPayload {
    sub: number;
    email: string;
    role: Role;
    iat?: number;
    exp?: number;
}
