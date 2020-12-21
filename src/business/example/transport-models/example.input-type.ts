import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';

import { IExampleInstanceInputModel } from '@app/common/example';

@InputType()
export class ExampleInputType implements IExampleInstanceInputModel {
  @Field((type) => Int)
  @IsNotEmpty()
  @IsNumber()
  public data!: IExampleInstanceInputModel['data'];
}
