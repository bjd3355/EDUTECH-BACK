import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CoursService } from './cours.service';
import { Cours } from './cours.entity';
import { FileInterceptor } from '@nestjs/platform-express';


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

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    }

    @Post()
    @UseInterceptors(FileInterceptor('imageCours'))
    async newCours(@Body('cours') cours:Cours, @UploadedFile() file: Express.Multer.File):Promise<Cours>{
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
