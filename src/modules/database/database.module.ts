import { Module, Global } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Entity } from 'typeorm';
import * as config from 'config';

import * as Entities from './entities';

const entities: typeof Entity[] = Object.values(Entities);
const databaseConfig = config.get<TypeOrmModuleOptions>('database');
const typeOrmConfig = <TypeOrmModuleOptions>{ ...databaseConfig, entities };

@Global()
@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), TypeOrmModule.forFeature(entities)],
  exports: [TypeOrmModule],
  controllers: [],
  providers: [],
})
export class DatabaseModule {}
