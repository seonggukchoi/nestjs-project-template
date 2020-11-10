import { Module, DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  initializeTransactionalContext,
  patchTypeORMRepositoryWithBaseRepository,
} from 'typeorm-transactional-cls-hooked';

import { TypeORMConfigService } from './typeorm-config.service';

@Module({
  imports: [TypeOrmModule.forRootAsync({ useClass: TypeORMConfigService })],
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
