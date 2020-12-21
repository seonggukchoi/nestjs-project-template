import { ObjectType, Field, Int } from '@nestjs/graphql';

import { IExampleInstanceModel } from '@app/common/example';

@ObjectType()
export class ExampleObjectType implements IExampleInstanceModel {
  @Field((type) => Int)
  public id!: IExampleInstanceModel['id'];

  @Field((type) => Int)
  public data!: IExampleInstanceModel['data'];

  @Field((type) => Date)
  public createdAt!: IExampleInstanceModel['createdAt'];

  @Field((type) => Date)
  public updatedAt!: IExampleInstanceModel['createdAt'];
}
