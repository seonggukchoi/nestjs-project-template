import { Module } from '@nestjs/common';

import { GraphQLModule } from '@app/modules/graphql';

import { HealthModule } from '@app/api/health';

@Module({
  imports: [HealthModule, GraphQLModule],
  exports: [],
  controllers: [],
  providers: [],
})
export class AppModule {}
