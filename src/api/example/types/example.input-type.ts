import { IsNotEmpty, IsNumber } from 'class-validator';

import { IExampleTransportInputModel } from '@app/business/example';

export class ExampleInputType implements IExampleTransportInputModel {
  @IsNotEmpty()
  @IsNumber()
  public data!: IExampleTransportInputModel['data'];
}
