import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { json, urlencoded } from 'express';
import * as config from 'config';
import * as csrf from 'csurf';

export function applyGlobalPipes(app: NestExpressApplication): void {
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  app.use(json({ limit: '5mb' }));
  app.use(urlencoded({ extended: true, limit: '5mb' }));

  if (config.get<boolean>('csrf.enabled')) {
    app.use(csrf({ cookie: true }));
  }

  app.disable('x-powered-by');
}
