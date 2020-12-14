import { ObjectType, Field, Int } from '@nestjs/graphql';

import { IExampleModel } from '@app/models/data-models/example';

@ObjectType()
export class ExampleObjectType implements IExampleModel {
  @Field((type) => Int)
  public id!: IExampleModel['id'];

  @Field((type) => Date)
  public createdAt!: IExampleModel['createdAt'];

  @Field((type) => Date)
  public updatedAt!: IExampleModel['createdAt'];
}
