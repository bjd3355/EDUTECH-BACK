import { Repository } from "typeorm";
import { Teacher } from "./teacher.entity";
import { CreateTeacherDto } from "./DTO/create-teacher.dto";
import { UpdateTeacherDto } from "./DTO/update-teacher.dto";
import { User } from "../users/users.entity";
import { UsersService } from "../users/users.service";
export declare class TeacherService {
    private teacherRepo;
    private usersService;
    constructor(teacherRepo: Repository<Teacher>, usersService: UsersService);
    create(dto: CreateTeacherDto, user?: User): Promise<Teacher>;
    findAll(): Promise<Teacher[]>;
    findOne(id: string): Promise<Teacher>;
    update(id: string, dto: UpdateTeacherDto): Promise<Teacher>;
    remove(id: string): Promise<void>;
}
