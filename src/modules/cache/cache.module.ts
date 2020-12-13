import { Module } from '@nestjs/common';

import { CacheService } from './cache.service';
import { RedisClientService } from './redis-client.service';

@Module({
  imports: [],
  exports: [CacheService],
  providers: [CacheService, RedisClientService],
})
export class CacheModule {}
