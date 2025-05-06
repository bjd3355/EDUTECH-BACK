import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../users/users.service";
import { TeacherService } from "../teacher/teacher.service";
import { StudentService } from "../student/student.service";
import { User } from "../users/users.entity";
import { RegisterDto } from "./dto/register.dto";
export declare class AuthService {
    private jwtService;
    private usersService;
    private teacherService;
    private studentService;
    constructor(jwtService: JwtService, usersService: UsersService, teacherService: TeacherService, studentService: StudentService);
    login(email: string, password: string): Promise<{
        access_token: string;
        user: User;
    }>;
    validateUser(payload: {
        sub: string;
        email: string;
        role: string;
    }): Promise<User>;
    register(dto: RegisterDto): Promise<User | {
        user: User;
        teacher: import("../teacher/teacher.entity").Teacher;
        student?: undefined;
    } | {
        user: User;
        student: import("../student/student.entity").Student;
        teacher?: undefined;
    }>;
}
