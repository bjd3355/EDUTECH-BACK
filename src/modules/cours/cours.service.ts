import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Cours } from './cours.entity';


@Injectable()
export class CoursService{
    
    constructor(
    @InjectRepository(Cours)
    private coursRepository:Repository<Cours>){}

    async findAllCours():Promise<Cours[]>{
        return await this.coursRepository.find();
    }
    
    async findCours(id:number):Promise<Cours>{
        const cours =  await this.coursRepository.findOneBy({id})
        if(!cours) throw new NotFoundException(`le cours ${id} n'a pas été trouvé`);
        
        return cours;
    }

    async createCours(cours:Partial<Cours>, file?:Express.Multer.File):Promise<Cours>{
        const nouveauCours = await this.coursRepository.create({
            ...cours,
            photo:file?.filename,
        });
        
        return this.coursRepository.save(nouveauCours);
    }

    async updateCours(id:number, cours:Partial<Cours>):Promise<Cours>{
        await this.coursRepository.update(id, cours);
        return this.findCours(id)
    }

    async deleteCours(id):Promise<void>{
        await this.coursRepository.delete(id)
    }
}

