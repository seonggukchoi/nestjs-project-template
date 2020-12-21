import { Module } from '@nestjs/common';

import { DatabaseModule } from '@app/modules/database';
import { GraphQLModule } from '@app/modules/graphql';
import { LoggerModule } from '@app/modules/logger';

import * as Entities from '@app/entities';

import { HealthAPIModule } from '@app/api/health';
import { ExampleAPIModule } from '@app/api/example';

import { HealthGraphQLModule } from '@app/graphql/health';
import { ExampleGraphQLModule } from '@app/graphql/example';

@Module({
  imports: [
    /* Global Modules */
    DatabaseModule.forRoot(Object.values(Entities)),
    GraphQLModule,
    LoggerModule,

    /* API Modules */
    HealthAPIModule,
    ExampleAPIModule,

    /* GraphQL Modules */
    HealthGraphQLModule,
    ExampleGraphQLModule,
  ],
  exports: [],
  controllers: [],
  providers: [],
})
export class AppModule {}
