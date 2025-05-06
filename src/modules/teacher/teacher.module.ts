// src/modules/teacher/teacher.module.ts
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Teacher } from "./teacher.entity";
import { TeacherService } from "./teacher.service";
import { TeacherController } from "./teacher.controller";
import { UsersModule } from "../users/users.module"; // Importez le module des utilisateurs

@Module({
  imports: [
    TypeOrmModule.forFeature([Teacher]),
    UsersModule, // Ajoutez le module des utilisateurs ici
  ],
  controllers: [TeacherController],
  providers: [TeacherService],
  exports: [TeacherService],
})
export class TeacherModule {}
