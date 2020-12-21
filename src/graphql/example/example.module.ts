import { Module } from '@nestjs/common';

import { BusinessExampleModule } from '@app/business/example';

import { ExampleResolver } from './example.resolver';

@Module({
  imports: [BusinessExampleModule],
  exports: [],
  providers: [ExampleResolver],
})
export class ExampleGraphQLModule {}
