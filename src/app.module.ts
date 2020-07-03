import { Module } from '@nestjs/common';

// import { DatabaseModule } from './modules/database/database.module';

import { HealthModule } from './health/health.module';

@Module({
  imports: [
    // DatabaseModule,
    HealthModule,
  ],
  exports: [],
  controllers: [],
  providers: [],
})
export class AppModule {}
