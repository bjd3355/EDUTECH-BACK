import { SectionService } from "./section.service";
export declare class SectionController {
    private readonly sectionService;
    constructor(sectionService: SectionService);
    findAll(): Promise<import("./section.entity").Section[]>;
}
