import { randomUUID } from 'crypto';
import { join } from 'path';

import fastifyCookie from '@fastify/cookie';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    { cors: true },
  );
  const configService = app.get(ConfigService);

  await app.register(fastifyCookie, {
    secret: configService.get('COOKIE_SECRET', randomUUID()),
  });

  app.useStaticAssets({ root: join(__dirname, '../uploads') });
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(configService.get('PORT', 4000));
}
bootstrap();
