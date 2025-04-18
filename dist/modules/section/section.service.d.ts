import { Repository } from "typeorm";
import { Section } from "./section.entity";
export declare class SectionService {
    private sectionRepo;
    constructor(sectionRepo: Repository<Section>);
    findAll(): Promise<Section[]>;
}
