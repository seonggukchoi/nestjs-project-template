import { Module } from '@nestjs/common';

import { BusinessHealthModule } from '@app/business/health';

import { HealthController } from './health.controller';

@Module({
  imports: [BusinessHealthModule],
  exports: [],
  controllers: [HealthController],
  providers: [],
})
export class HealthAPIModule {}
