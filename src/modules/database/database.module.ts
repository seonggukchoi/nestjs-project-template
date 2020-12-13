import { Module, DynamicModule, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  initializeTransactionalContext,
  patchTypeORMRepositoryWithBaseRepository,
} from 'typeorm-transactional-cls-hooked';

import { TypeORMConfigService } from './typeorm-config.service';

import * as Entities from './entities';
import * as Repositories from './repositories';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useClass: TypeORMConfigService }),
    TypeOrmModule.forFeature([...Object.values(Entities), ...Object.values(Repositories)]),
  ],
  exports: [TypeOrmModule],
  providers: [],
})
export class DatabaseModule {
  public static forRoot(): DynamicModule {
    initializeTransactionalContext();
    patchTypeORMRepositoryWithBaseRepository();

    return {
      module: DatabaseModule,
    };
  }
}
