import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';

import { TestEntity } from '../entities';

@EntityRepository(TestEntity)
export class TestRepository extends BaseRepository<TestEntity> {}
