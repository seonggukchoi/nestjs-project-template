import { Module } from '@nestjs/common';

import { DatabaseModule } from '@/modules/database';

import { HealthController } from './health.controller';

@Module({
  imports: [DatabaseModule],
  exports: [],
  controllers: [HealthController],
  providers: [],
})
export class HealthModule {}
