import { Module } from '@nestjs/common';

import { HealthResolver } from './health.resolver';

@Module({
  imports: [],
  exports: [],
  providers: [HealthResolver],
})
export class HealthModule {}
