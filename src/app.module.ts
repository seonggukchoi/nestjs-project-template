import { Module } from '@nestjs/common';

import { GraphQLModule } from '@app/modules/graphql';

import { HealthModule } from '@app/api/health';

import { HealthModule as HealthGraphQLModule } from '@app/graphql/health';

@Module({
  imports: [
    /* Global Modules */
    GraphQLModule,

    /* API Modules */
    HealthModule,

    /* GraphQL Modules */
    HealthGraphQLModule,
  ],
  exports: [],
  controllers: [],
  providers: [],
})
export class AppModule {}
