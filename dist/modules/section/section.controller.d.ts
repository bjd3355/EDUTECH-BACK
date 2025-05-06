import { SectionService } from './section.service';
import { Section } from './section.entity';
export declare class SectionController {
    private readonly svc;
    constructor(svc: SectionService);
    findAll(filiereId?: string): Promise<Section[]>;
}
