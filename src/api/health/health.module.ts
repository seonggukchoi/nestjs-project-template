import { Module } from '@nestjs/common';

import { DatabaseModule } from '@app/modules/database';
import { LoggerModule } from '@app/modules/logger';

import { HealthController } from './health.controller';

@Module({
  imports: [DatabaseModule, LoggerModule],
  exports: [],
  controllers: [HealthController],
  providers: [],
})
export class HealthModule {}
