import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { TeacherModule } from './modules/teacher/teacher.module';
import { StudentModule } from './modules/student/student.module';
import { FiliereModule } from './modules/filiere/filiere.module';
import { MatiereModule } from './modules/matiere/matiere.module';
import { CoursModule } from './modules/cours/cours.module';
import { NiveauModule } from './modules/niveau/niveau.module';
import { SectionModule } from './modules/section/section.module';
import { QcmModule } from './modules/qcm/qcm.module';
import { VirtualClassesModule } from './modules/virtual-classes/virtual-classes.module';
import { ClasseModule } from './modules/classe/classe.module';

import { ScheduleModule } from './modules/schedules/schedule.module';
import { AvailabilityModule } from './modules/availability/availability.module';
import { SlotModule } from './modules/slot/slot.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClasseController } from './modules/classe/classe.controller';
import { ClasseService } from './modules/classe/classe.service';

@Module({
  imports: [
    // Configuration globale
    ConfigModule.forRoot({ isGlobal: true }),

    // Connexion asynchrone à la base de données
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get('DB_HOST') || 'localhost',
        port: +config.get('DB_PORT') || 3306,
        username: config.get('DB_USER') || 'root',
        password: config.get('DB_PASSWORD') || '',
        database: config.get('DB_NAME') || 'edutech_db',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),

    // Service de fichiers statiques (uploads)
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'upload'),
      serveRoot: '/upload',
    }),

    // Modules métiers
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
    ClasseModule,

    // Modules emploi du temps et connexes
    ScheduleModule,
    AvailabilityModule,
    SlotModule,
  ],
  controllers: [
    AppController,
    ClasseController,  // si vous avez besoin d’exposer manuellement ce controller
  ],
  providers: [
    AppService,
    ClasseService,     // idem pour ce service
  ],
})
export class AppModule {}
