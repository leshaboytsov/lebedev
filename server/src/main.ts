import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  // Используйте express.static для обслуживания статических файлов
  app.use('/film', express.static(join(__dirname, '..', 'film')));

  await app.listen(8000);
}
bootstrap();
