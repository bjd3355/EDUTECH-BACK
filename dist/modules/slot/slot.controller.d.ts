import { SlotService } from './slot.service';
import { CreateSlotDto } from './DTO/create-slot.dto';
import { UpdateSlotDto } from './DTO/update-slot.dto';
export declare class SlotController {
    private readonly svc;
    constructor(svc: SlotService);
    create(dto: CreateSlotDto): Promise<import("./slot.entity").Slot>;
    findAll(q: any): Promise<import("./slot.entity").Slot[]>;
    findOne(id: number): Promise<import("./slot.entity").Slot>;
    update(id: number, dto: UpdateSlotDto): Promise<import("./slot.entity").Slot>;
    remove(id: number): Promise<void>;
}
