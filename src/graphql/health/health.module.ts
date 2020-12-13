import { Module } from '@nestjs/common';

import { BusinessHealthModule } from '@app/business/health';

import { HealthResolver } from './health.resolver';

@Module({
  imports: [BusinessHealthModule],
  exports: [],
  providers: [HealthResolver],
})
export class HealthGraphQLModule {}
