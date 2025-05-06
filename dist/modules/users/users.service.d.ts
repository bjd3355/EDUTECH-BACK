import { Repository } from "typeorm";
import { User } from "./users.entity";
import { CreateUserDto } from "./DTO/create-user.dto";
import { UpdateUserDto } from "./DTO/update-user.dto";
export declare class UsersService {
    private readonly userRepo;
    constructor(userRepo: Repository<User>);
    create(dto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    findOneByEmail(email: string): Promise<User | null>;
    update(id: string, dto: UpdateUserDto): Promise<User>;
    remove(id: string): Promise<void>;
}
