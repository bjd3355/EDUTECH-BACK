import { AvailabilityService } from './availability.service';
import { CreateAvailabilityDto } from './DTO/create-availability.dto';
import { UpdateAvailabilityDto } from './DTO/update-availability.dto';
export declare class AvailabilityController {
    private readonly svc;
    constructor(svc: AvailabilityService);
    create(dto: CreateAvailabilityDto): Promise<import("./availability.entity").Availability>;
    findAll(q: any): Promise<import("./availability.entity").Availability[]>;
    findOne(id: number): Promise<import("./availability.entity").Availability>;
    update(id: number, dto: UpdateAvailabilityDto): Promise<import("./availability.entity").Availability>;
    remove(id: number): Promise<void>;
}
