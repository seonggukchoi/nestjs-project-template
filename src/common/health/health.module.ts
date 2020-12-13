import { Module } from '@nestjs/common';

import { CommonHealthService } from './health.service';

@Module({
  imports: [],
  exports: [CommonHealthService],
  providers: [CommonHealthService],
})
export class CommonHealthModule {}
