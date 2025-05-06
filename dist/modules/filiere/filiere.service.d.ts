import { Repository } from 'typeorm';
import { Filiere } from './filiere.entity';
export declare class FiliereService {
    private readonly repo;
    constructor(repo: Repository<Filiere>);
    findAll(niveauId?: number): Promise<Filiere[]>;
}
