import { NiveauService } from './niveau.service';
import { Niveau } from './niveau.entity';
export declare class NiveauController {
    private readonly svc;
    constructor(svc: NiveauService);
    findAll(): Promise<Niveau[]>;
}
