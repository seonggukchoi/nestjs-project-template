import { Module, DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';
import {
  initializeTransactionalContext,
  patchTypeORMRepositoryWithBaseRepository,
} from 'typeorm-transactional-cls-hooked';

import { TypeORMConfigService } from './typeorm-config.service';

@Module({})
export class DatabaseModule {
  public static forRoot(entities: EntityClassOrSchema[]): DynamicModule {
    initializeTransactionalContext();
    patchTypeORMRepositoryWithBaseRepository();

    return {
      imports: [
        TypeOrmModule.forRootAsync({ useFactory: () => new TypeORMConfigService(entities).createTypeOrmOptions() }),
      ],
      exports: [TypeOrmModule],
      module: DatabaseModule,
    };
  }

  public static forFeature(repositories: EntityClassOrSchema[]): DynamicModule {
    return {
      imports: [TypeOrmModule.forFeature(repositories)],
      exports: [TypeOrmModule],
      module: DatabaseModule,
    };
  }
}
