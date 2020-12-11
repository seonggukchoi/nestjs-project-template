import { Module } from '@nestjs/common';

import { HealthService } from './health.service';

@Module({
  imports: [],
  exports: [HealthService],
  providers: [HealthService],
})
export class HealthModule {}
