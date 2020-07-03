import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';

@Module({
  imports: [],
  exports: [],
  controllers: [HealthController],
  providers: [],
})
export class HealthModule {}
