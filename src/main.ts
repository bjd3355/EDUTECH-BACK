import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { config } from "dotenv";
import { join } from "path";
import * as express from "express";

config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 1️⃣ Préfixe global pour toutes les routes
  app.setGlobalPrefix('api');

  // 2️⃣ Validation automatique + transformation des payloads
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  // 3️⃣ CORS — ici on n'autorise que le front React en localhost:3000
  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:5173'],
    credentials: true,
  });

  // 4️⃣ Fichiers statiques : /api/uploads/… servira le dossier upload/
  app.use('/api/uploads', express.static(join(__dirname, '..', 'upload')));

  const port = process.env.PORT || 3000;
  await app.listen(port);

  console.log(`Application is running on: http://localhost:${port}/api`);
}

bootstrap();
