"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const auth_module_1 = require("./modules/auth/auth.module");
const users_module_1 = require("./modules/users/users.module");
const teacher_module_1 = require("./modules/teacher/teacher.module");
const student_module_1 = require("./modules/student/student.module");
const filiere_module_1 = require("./modules/filiere/filiere.module");
const matiere_module_1 = require("./modules/matiere/matiere.module");
const cours_module_1 = require("./modules/cours/cours.module");
const niveau_module_1 = require("./modules/niveau/niveau.module");
const section_module_1 = require("./modules/section/section.module");
const qcm_module_1 = require("./modules/qcm/qcm.module");
const virtual_classes_module_1 = require("./modules/virtual-classes/virtual-classes.module");
const classe_module_1 = require("./modules/classe/classe.module");
const schedule_module_1 = require("./modules/schedules/schedule.module");
const availability_module_1 = require("./modules/availability/availability.module");
const slot_module_1 = require("./modules/slot/slot.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const classe_controller_1 = require("./modules/classe/classe.controller");
const classe_service_1 = require("./modules/classe/classe.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (config) => ({
                    type: 'mysql',
                    host: config.get('DB_HOST') || 'localhost',
                    port: +config.get('DB_PORT') || 3306,
                    username: config.get('DB_USER') || 'root',
                    password: config.get('DB_PASSWORD') || '',
                    database: config.get('DB_NAME') || 'edutech_db',
                    entities: [__dirname + '/**/*.entity{.ts,.js}'],
                    synchronize: true,
                }),
                inject: [config_1.ConfigService],
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'upload'),
                serveRoot: '/upload',
            }),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            teacher_module_1.TeacherModule,
            student_module_1.StudentModule,
            filiere_module_1.FiliereModule,
            matiere_module_1.MatiereModule,
            cours_module_1.CoursModule,
            niveau_module_1.NiveauModule,
            section_module_1.SectionModule,
            qcm_module_1.QcmModule,
            virtual_classes_module_1.VirtualClassesModule,
            classe_module_1.ClasseModule,
            schedule_module_1.ScheduleModule,
            availability_module_1.AvailabilityModule,
            slot_module_1.SlotModule,
        ],
        controllers: [
            app_controller_1.AppController,
            classe_controller_1.ClasseController,
        ],
        providers: [
            app_service_1.AppService,
            classe_service_1.ClasseService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map