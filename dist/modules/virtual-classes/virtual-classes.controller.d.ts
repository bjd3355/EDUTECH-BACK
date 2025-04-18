import { VirtualClassesService } from "./virtual-classes.service";
export declare class VirtualClassesController {
    private readonly virtualClassesService;
    constructor(virtualClassesService: VirtualClassesService);
    findAll(): string;
}
