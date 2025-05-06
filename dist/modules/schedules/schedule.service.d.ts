import { Repository } from 'typeorm';
import { Schedule } from './schedule.entity';
import { CreateScheduleDto } from './DTO/CreateScheduleDto';
import { UpdateScheduleDto } from './DTO/UpdateScheduleDto';
export declare class ScheduleService {
    private readonly schedRepo;
    constructor(schedRepo: Repository<Schedule>);
    create(dto: CreateScheduleDto): Promise<any>;
    findAll(filters?: any): Promise<any[]>;
    findOne(id: number): Promise<any>;
    update(id: number, dto: UpdateScheduleDto): Promise<any>;
    remove(id: number): Promise<void>;
    private transform;
}
