import { TeacherService } from "./teacher.service";
import { CreateTeacherDto } from "./DTO/create-teacher.dto";
import { UpdateTeacherDto } from "./DTO/update-teacher.dto";
export declare class TeacherController {
    private readonly teacherService;
    constructor(teacherService: TeacherService);
    create(createTeacherDto: CreateTeacherDto): Promise<import("./teacher.entity").Teacher>;
    findAll(): Promise<import("./teacher.entity").Teacher[]>;
    findOne(id: string): Promise<import("./teacher.entity").Teacher>;
    update(id: string, updateTeacherDto: UpdateTeacherDto): Promise<import("./teacher.entity").Teacher>;
    remove(id: string): Promise<void>;
}
