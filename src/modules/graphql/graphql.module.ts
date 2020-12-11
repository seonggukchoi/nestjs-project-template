import { Module } from '@nestjs/common';
import { GraphQLModule as NestGraphQLModule } from '@nestjs/graphql';

import { GraphQLConfigService } from './graphql-config.service';

@Module({
  imports: [NestGraphQLModule.forRootAsync({ useClass: GraphQLConfigService })],
  exports: [NestGraphQLModule],
  providers: [],
})
export class GraphQLModule {}
