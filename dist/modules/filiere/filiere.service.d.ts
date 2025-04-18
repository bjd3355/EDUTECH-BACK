import { Repository } from "typeorm";
import { Filiere } from "./filiere.entity";
export declare class FiliereService {
    private filiereRepo;
    constructor(filiereRepo: Repository<Filiere>);
    findAll(): Promise<Filiere[]>;
}
