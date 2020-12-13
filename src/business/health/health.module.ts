import { Module } from '@nestjs/common';

import { CommonHealthModule } from '@app/common/health';

import { BusinessHealthService } from './health.service';

@Module({
  imports: [CommonHealthModule],
  exports: [BusinessHealthService],
  providers: [BusinessHealthService],
})
export class BusinessHealthModule {}
