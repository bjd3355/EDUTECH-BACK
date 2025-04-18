import { CoursService } from './cours.service';
import { Cours } from './cours.entity';
export declare class CoursController {
    private readonly coursService;
    constructor(coursService: CoursService);
    findProfCours(id_prof: any): Promise<Cours[]>;
    findAllCours(): Promise<Cours[]>;
    findCours(id: string): Promise<Cours>;
    uploadFile(file: Express.Multer.File): string;
    newCours(cours: Cours, file: Express.Multer.File): Promise<Cours>;
    updateCours(id: string, cours: Partial<Cours>): Promise<Cours>;
    deleteCours(id: any): Promise<void>;
}
