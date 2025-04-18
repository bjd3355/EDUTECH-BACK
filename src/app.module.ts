import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EmploiDuTempsModule } from "./modules/emploi-du-temps/emploi-du-temps.module";
import { AuthModule } from "./modules/auth/auth.module";
import { UsersModule } from "./modules/users/users.module";
import { TeacherModule } from "./modules/teacher/teacher.module";
import { StudentModule } from "./modules/student/student.module";
import { FiliereModule } from "./modules/filiere/filiere.module";
import { MatiereModule } from "./modules/matiere/matiere.module";
import { CoursModule } from "./modules/cours/cours.module";
import { NiveauModule } from "./modules/niveau/niveau.module";
import { SectionModule } from "./modules/section/section.module";
import { QcmModule } from "./modules/qcm/qcm.module";
import { VirtualClassesModule } from "./modules/virtual-classes/virtual-classes.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "edutech_db",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    EmploiDuTempsModule,
    AuthModule,
    UsersModule,
    TeacherModule,
    StudentModule,
    FiliereModule,
    MatiereModule,
    CoursModule,
    NiveauModule,
    SectionModule,
    QcmModule,
    VirtualClassesModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'upload'),
      serveRoot: '/upload',
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
