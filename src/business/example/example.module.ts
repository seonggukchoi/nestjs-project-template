import { Module } from '@nestjs/common';

import { CommonExampleModule } from '@app/common/example';

import { BusinessExampleService } from './example.service';

@Module({
  imports: [CommonExampleModule],
  exports: [BusinessExampleService],
  providers: [BusinessExampleService],
})
export class BusinessExampleModule {}
