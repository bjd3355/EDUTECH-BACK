import { User } from "./users.entity";
export declare class UserActivity {
    id: string;
    action: string;
    date: string;
    details: string;
    ip: string;
    user: User;
}
