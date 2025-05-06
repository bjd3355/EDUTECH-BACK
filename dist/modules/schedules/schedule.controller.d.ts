import { ScheduleService } from './schedule.service';
import { CreateScheduleDto } from './DTO/CreateScheduleDto';
import { UpdateScheduleDto } from './DTO/UpdateScheduleDto';
export declare class ScheduleController {
    private readonly svc;
    constructor(svc: ScheduleService);
    create(dto: CreateScheduleDto): Promise<any>;
    findAll(filters: any): Promise<any[]>;
    findOne(id: number): Promise<any>;
    update(id: number, dto: UpdateScheduleDto): Promise<any>;
    remove(id: number): Promise<void>;
}
