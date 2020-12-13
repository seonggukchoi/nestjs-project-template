import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import config from 'config';

@Injectable()
export class RedisClientService extends Redis {
  constructor() {
    super({
      host: config.get<string>('redis.host'),
      port: config.get<number>('redis.port'),
    });
  }
}
