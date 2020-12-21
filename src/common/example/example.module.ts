import { Module } from '@nestjs/common';

import { DatabaseModule } from '@app/modules/database';

import { CommonExampleService } from './example.service';
import { ExampleRepository } from './example.repository';

@Module({
  imports: [DatabaseModule.forFeature([ExampleRepository])],
  exports: [CommonExampleService],
  providers: [CommonExampleService],
})
export class CommonExampleModule {}
