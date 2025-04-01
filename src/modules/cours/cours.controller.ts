import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CoursService } from './cours.service';
import { Cours } from './cours.entity';


@Controller('cours')
export class CoursController {
    constructor(private readonly coursService: CoursService){}

    @Get()
    async findAllCours():Promise<Cours[]>{
        return await this.coursService.findAllCours()
    }

    @Get(':id')
    async findCours(@Param('id') id:number):Promise<Cours>{
        return await this.coursService.findCours(id)
    }

    @Post()
    async newCours(@Body('cours') cours:Cours):Promise<Cours>{
        return await this.coursService.createCours(cours);
    }

    @Put(':id')
    async updateCours(@Param('id') id:number, @Body('cours') cours:Partial<Cours>):Promise<Cours>{
        return this.coursService.updateCours(id, cours);
    }


    @Delete('id')
    async deleteCours(@Param('id') id):Promise<void>{
        this.coursService.deleteCours(id)
    }

    
    

}
