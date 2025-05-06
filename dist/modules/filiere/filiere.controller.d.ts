import { FiliereService } from './filiere.service';
import { Filiere } from './filiere.entity';
export declare class FiliereController {
    private readonly svc;
    constructor(svc: FiliereService);
    findAll(niveauId?: string): Promise<Filiere[]>;
}
