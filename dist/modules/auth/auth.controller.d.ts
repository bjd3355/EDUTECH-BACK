import { AuthService } from "./auth.service";
import { RegisterDto } from "./dto/register.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: {
        email: string;
        password: string;
    }): Promise<{
        access_token: string;
        user: import("../users/users.entity").User;
    }>;
    register(dto: RegisterDto): Promise<import("../users/users.entity").User | {
        user: import("../users/users.entity").User;
        teacher: import("../teacher/teacher.entity").Teacher;
        student?: undefined;
    } | {
        user: import("../users/users.entity").User;
        student: import("../student/student.entity").Student;
        teacher?: undefined;
    }>;
}
