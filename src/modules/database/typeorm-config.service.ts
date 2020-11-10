import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import * as config from 'config';

@Injectable()
export class TypeORMConfigService implements TypeOrmOptionsFactory {
  public createTypeOrmOptions(): TypeOrmModuleOptions {
    const typeOrmConfig = config.get<TypeOrmModuleOptions>('database');

    return typeOrmConfig;
  }
}
