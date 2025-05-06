import { MatiereService } from "./matiere.service";
export declare class MatiereController {
    private readonly matiereService;
    constructor(matiereService: MatiereService);
    findAll(): string;
}
