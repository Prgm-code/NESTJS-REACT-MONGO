import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // enable cors for all origins
  app.setGlobalPrefix('api'); // set global prefix for all routes
  app.useGlobalPipes( new ValidationPipe());
  await app.listen(4000);
}
bootstrap();
