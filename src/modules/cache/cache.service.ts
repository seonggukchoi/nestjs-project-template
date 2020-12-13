import { Injectable } from '@nestjs/common';

import { RedisClientService } from './redis-client.service';

@Injectable()
export class CacheService {
  constructor(private readonly redisClientService: RedisClientService) {}

  public async get(key: string): Promise<string | null> {
    const data = await this.redisClientService.get(key);

    return data;
  }

  public async set(key: string, data: string): Promise<boolean> {
    const result = await this.redisClientService.set(key, data);

    if (result !== 'OK') {
      throw new Error(`Cannot set value as key '${key}'.`);
    }

    return true;
  }

  public async setWithTimeout(key: string, data: string, timeout: number): Promise<boolean> {
    const result = await this.redisClientService.set(key, data, 'PX', timeout);

    if (result !== 'OK') {
      throw new Error(`Cannot set value with timeout as key '${key}'.`);
    }

    return true;
  }

  public async del(key: string): Promise<boolean> {
    await this.redisClientService.del(key);

    return true;
  }
}
