import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import config from 'config';

import { LoggerService } from './modules/logger';

import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const applicationPort = config.get<number>('application.port');
  const cors = config.get<boolean>('application.cors');

  const useNativeLogger = config.get<boolean>('application.useNativeLogger');

  const app = await NestFactory.create(AppModule, {
    cors,
    logger: useNativeLogger,
  });

  const useCustomLogger = config.get<boolean>('application.useCustomLogger');

  if (useCustomLogger) {
    app.useLogger(app.get(LoggerService));
  }

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(applicationPort);
}

bootstrap();
