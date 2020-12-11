import { Module, Global } from '@nestjs/common';
import { GraphQLModule as NestGraphQLModule } from '@nestjs/graphql';

import { GraphQLConfigService } from './graphql-config.service';

@Global()
@Module({
  imports: [NestGraphQLModule.forRootAsync({ useClass: GraphQLConfigService })],
  exports: [NestGraphQLModule],
  providers: [],
})
export class GraphQLModule {}
