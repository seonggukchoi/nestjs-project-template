import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';
import config from 'config';

@Injectable()
export class TypeORMConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly entities: EntityClassOrSchema[]) {}

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    const typeOrmConfig = config.get<TypeOrmModuleOptions>('database');
    const entities = this.entities;

    const typeOrmConfigWithEntities: TypeOrmModuleOptions = { ...typeOrmConfig, entities };

    return typeOrmConfigWithEntities;
  }
}
