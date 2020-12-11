import { Module } from '@nestjs/common';

import { HealthModule as CommonHealthModule } from '@app/common/health';

import { HealthResolver } from './health.resolver';

@Module({
  imports: [CommonHealthModule],
  exports: [],
  providers: [HealthResolver],
})
export class HealthModule {}
