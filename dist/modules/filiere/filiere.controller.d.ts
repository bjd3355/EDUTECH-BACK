import { FiliereService } from "./filiere.service";
export declare class FiliereController {
    private readonly filiereService;
    constructor(filiereService: FiliereService);
    findAll(): Promise<import("./filiere.entity").Filiere[]>;
}
