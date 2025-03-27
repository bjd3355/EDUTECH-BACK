import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Utilisateur } from './modules/users/users.entity';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module'; 
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './middleware/jwt.guard'; 
import { RolesGuard } from './middleware/roles.guard'; 


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'edutech',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Utilisateur]),
    AuthModule,
    UsersModule, 
  ],
  controllers: [AppController],
  providers: [
    AppService,
   
    {
      provide: APP_GUARD,
      useClass: RolesGuard, 
    },
  ],
})
export class AppModule {}