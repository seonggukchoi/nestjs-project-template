import { NestFactory } from '@nestjs/core';
import * as config from 'config';

import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const applicationPort = config.get<number>('application.port');
  const cors = config.get<boolean>('application.cors');

  const app = await NestFactory.create(AppModule, { cors });
  await app.listen(applicationPort);
}

bootstrap();
