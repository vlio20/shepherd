import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';
import { applyGlobalPipes } from './app-setup';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  applyGlobalPipes(app);
  await app.listen(config.get('port'));
}

bootstrap();
