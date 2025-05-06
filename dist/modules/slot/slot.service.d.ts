import { Repository } from 'typeorm';
import { Slot } from './slot.entity';
import { CreateSlotDto } from './DTO/create-slot.dto';
import { UpdateSlotDto } from './DTO/update-slot.dto';
export declare class SlotService {
    private readonly repo;
    constructor(repo: Repository<Slot>);
    create(dto: CreateSlotDto): Promise<Slot>;
    findAll(filters?: any): Promise<Slot[]>;
    findOne(id: number): Promise<Slot>;
    update(id: number, dto: UpdateSlotDto): Promise<Slot>;
    remove(id: number): Promise<void>;
}
