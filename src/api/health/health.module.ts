import { Module } from '@nestjs/common';

import { DatabaseModule } from '@/modules/database';
import { LoggerModule } from '@/modules/logger';

import { HealthController } from './health.controller';

@Module({
  imports: [DatabaseModule, LoggerModule],
  exports: [],
  controllers: [HealthController],
  providers: [],
})
export class HealthModule {}
