import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';

import { ExampleEntity } from '@app/entities';

@EntityRepository(ExampleEntity)
export class ExampleRepository extends BaseRepository<ExampleEntity> {
  public async getExampleById(exampleId: number): Promise<ExampleEntity> {
    const exampleInstance = await this.findOneOrFail({
      where: { id: exampleId },
    });

    return exampleInstance;
  }

  public async deleteExampleById(exampleId: number): Promise<boolean> {
    const exampleInstance = await this.getExampleById(exampleId);

    await this.remove(exampleInstance);

    return true;
  }
}
