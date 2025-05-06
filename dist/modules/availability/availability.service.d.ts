import { Repository } from 'typeorm';
import { Availability } from './availability.entity';
import { CreateAvailabilityDto } from './DTO/create-availability.dto';
import { UpdateAvailabilityDto } from './DTO/update-availability.dto';
export declare class AvailabilityService {
    private readonly repo;
    constructor(repo: Repository<Availability>);
    create(dto: CreateAvailabilityDto): Promise<Availability>;
    findAll(filters?: any): Promise<Availability[]>;
    findOne(id: number): Promise<Availability>;
    update(id: number, dto: UpdateAvailabilityDto): Promise<Availability>;
    remove(id: number): Promise<void>;
}
