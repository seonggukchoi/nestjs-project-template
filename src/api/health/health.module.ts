import { Module } from '@nestjs/common';

import { CommonHealthModule } from '@app/common/health';

import { HealthController } from './health.controller';

@Module({
  imports: [CommonHealthModule],
  exports: [],
  controllers: [HealthController],
  providers: [],
})
export class HealthAPIModule {}
