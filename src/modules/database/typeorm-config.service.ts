import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import config from 'config';

import * as Entities from './entities';

@Injectable()
export class TypeORMConfigService implements TypeOrmOptionsFactory {
  public createTypeOrmOptions(): TypeOrmModuleOptions {
    const typeOrmConfig = config.get<TypeOrmModuleOptions>('database');
    const entities = Object.values(Entities);

    const typeOrmConfigWithEntities: TypeOrmModuleOptions = { ...typeOrmConfig, entities };

    return typeOrmConfigWithEntities;
  }
}
