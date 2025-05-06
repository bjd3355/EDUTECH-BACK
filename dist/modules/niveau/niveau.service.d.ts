import { Repository } from 'typeorm';
import { Niveau } from './niveau.entity';
export declare class NiveauService {
    private readonly repo;
    constructor(repo: Repository<Niveau>);
    findAll(): Promise<Niveau[]>;
}
