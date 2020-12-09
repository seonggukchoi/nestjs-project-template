import { Module } from '@nestjs/common';

import { HealthModule } from './api/health';

import { GraphQLModule } from '@/modules/graphql';

@Module({
  imports: [HealthModule, GraphQLModule],
  exports: [],
  controllers: [],
  providers: [],
})
export class AppModule {}
