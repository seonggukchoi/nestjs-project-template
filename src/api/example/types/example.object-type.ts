import { IExampleTransportModel } from '@app/business/example';

export class ExampleObjectType implements IExampleTransportModel {
  public id!: IExampleTransportModel['id'];
  public data!: IExampleTransportModel['data'];
  public createdAt!: IExampleTransportModel['createdAt'];
  public updatedAt!: IExampleTransportModel['createdAt'];
}
