import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsDate } from 'class-validator';

import { IExampleModel } from '@app/models/data-models/example';

@InputType()
export class ExampleInputType implements IExampleModel {
  @Field((type) => Int)
  @IsNotEmpty()
  @IsNumber()
  public id!: IExampleModel['id'];

  @Field((type) => Date)
  @IsNotEmpty()
  @IsDate()
  public createdAt!: IExampleModel['createdAt'];

  @Field((type) => Date)
  @IsNotEmpty()
  @IsDate()
  public updatedAt!: IExampleModel['createdAt'];
}
