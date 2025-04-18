import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CoursService } from './cours.service';
import { Cours } from './cours.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';


@Controller('cours')
export class CoursController {
    constructor(private readonly coursService: CoursService){}     
    
    @Get('professeur/:id')
    async findProfCours(@Param('id') id_prof):Promise<Cours[]>{
        return await this.coursService.teacherCours(id_prof);
    }

    @Get()
    async findAllCours():Promise<Cours[]>{
        return await this.coursService.findAllCours()
    }

    @Get(':id')
    async findCours(@Param('id') id:string):Promise<Cours>{
        return await this.coursService.findCours(id)
    }

    @Post('upload/support')
    @UseInterceptors(FileInterceptor('file', {storage:diskStorage({destination:'upload/support/',
        filename:function (req, file, cb){
            cb(null, file.originalname)
        }
    })}))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        return "go !"
    }

    @Post()
    @UseInterceptors(FileInterceptor('imageCours'))
    async newCours(@Body('cours') cours:Cours, @UploadedFile() file: Express.Multer.File):Promise<Cours>{
        return await this.coursService.createCours(cours);
    }

    @Put(':id')
    async updateCours(@Param('id') id:string, @Body('cours') cours:Partial<Cours>):Promise<Cours>{
        return this.coursService.updateCours(id, cours);
    }


    @Delete('id')
    async deleteCours(@Param('id') id):Promise<void>{
        this.coursService.deleteCours(id)
    }

}
