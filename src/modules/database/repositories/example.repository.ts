import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';

import { ExampleEntity } from '../entities';

@EntityRepository(ExampleEntity)
export class ExampleRepository extends BaseRepository<ExampleEntity> {}
