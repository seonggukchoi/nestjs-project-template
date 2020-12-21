import { Module } from '@nestjs/common';

import { BusinessExampleModule } from '@app/business/example';

import { ExampleController } from './example.controller';

@Module({
  imports: [BusinessExampleModule],
  exports: [],
  controllers: [ExampleController],
})
export class ExampleAPIModule {}
