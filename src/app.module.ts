import { Module } from '@nestjs/common';

import { HealthModule } from './health';

@Module({
  imports: [HealthModule],
  exports: [],
  controllers: [],
  providers: [],
})
export class AppModule {}
