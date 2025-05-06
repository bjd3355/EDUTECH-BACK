import { Repository } from 'typeorm';
import { Cours } from './cours.entity';
export declare class CoursService {
    private coursRepository;
    constructor(coursRepository: Repository<Cours>);
    findAllCours(): Promise<Cours[]>;
    findCours(id_cours: string): Promise<Cours>;
    createCours(cours: Partial<Cours>, file?: Express.Multer.File): Promise<Cours>;
    updateCours(id: string, cours: Partial<Cours>): Promise<Cours>;
    addSupport(file: Express.Multer.File): Promise<(alias?: string, queryRunner?: import("typeorm").QueryRunner) => import("typeorm").SelectQueryBuilder<Cours>>;
    teacherCours(id_teacher: any): Promise<Cours[]>;
    deleteCours(id: any): Promise<void>;
}
