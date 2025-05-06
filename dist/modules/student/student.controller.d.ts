import { StudentService } from "./student.service";
import { CreateStudentDto } from "./DTO/create-student.dto";
import { UpdateStudentDto } from "./DTO/update-student.dto";
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    create(createStudentDto: CreateStudentDto): Promise<import("./student.entity").Student>;
    findAll(): Promise<import("./student.entity").Student[]>;
    findOne(id: string): Promise<import("./student.entity").Student>;
    update(id: string, updateStudentDto: UpdateStudentDto): Promise<import("./student.entity").Student>;
    remove(id: string): Promise<void>;
}
