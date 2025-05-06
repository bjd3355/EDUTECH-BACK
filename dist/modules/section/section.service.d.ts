import { Repository } from 'typeorm';
import { Section } from './section.entity';
export declare class SectionService {
    private readonly repo;
    constructor(repo: Repository<Section>);
    findAll(filiereId?: number): Promise<Section[]>;
}
