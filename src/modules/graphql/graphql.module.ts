import { Module } from '@nestjs/common';
import { GraphQLModule as NestGraphQLModule } from '@nestjs/graphql';
import config from 'config';

import { HealthResolver } from './health.resolver';

@Module({
  imports: [
    NestGraphQLModule.forRoot({
      cors: config.get<string>('application.cors'),
      debug: config.get<boolean>('application.graphql.debug'),
      playground: config.get<boolean>('application.graphql.playground'),
      path: config.get<string>('application.graphql.path'),
      autoSchemaFile: true,
    }),
  ],
  exports: [NestGraphQLModule],
  providers: [HealthResolver],
})
export class GraphQLModule {}
