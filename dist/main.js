"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const dotenv_1 = require("dotenv");
const path_1 = require("path");
const express = require("express");
(0, dotenv_1.config)();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    app.enableCors({
        origin: ['http://localhost:3000', 'http://localhost:5173'],
        credentials: true,
    });
    app.use('/api/uploads', express.static((0, path_1.join)(__dirname, '..', 'upload')));
    const port = process.env.PORT || 3000;
    await app.listen(port);
    console.log(`Application is running on: http://localhost:${port}/api`);
}
bootstrap();
//# sourceMappingURL=main.js.map