import { Repository } from "typeorm";
import { Student } from "./student.entity";
import { CreateStudentDto } from "./DTO/create-student.dto";
import { UpdateStudentDto } from "./DTO/update-student.dto";
export declare class StudentService {
    private studentRepo;
    constructor(studentRepo: Repository<Student>);
    create(dto: CreateStudentDto): Promise<Student>;
    findAll(): Promise<Student[]>;
    findOne(id: string): Promise<Student>;
    update(id: string, dto: UpdateStudentDto): Promise<Student>;
    remove(id: string): Promise<void>;
}
