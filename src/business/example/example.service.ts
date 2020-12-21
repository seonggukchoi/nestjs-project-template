import { Injectable } from '@nestjs/common';

import { CommonExampleService, IExampleInstanceModel, IExampleInstanceInputModel } from '@app/common/example';

import { ExampleObjectType, ExampleInputType } from './transport-models';

@Injectable()
export class BusinessExampleService {
  constructor(private readonly commonExampleService: CommonExampleService) {}

  public async getExampleById(exampleId: number): Promise<ExampleObjectType> {
    const exampleModel = await this.commonExampleService.getExampleById(exampleId);
    const exampleObject = this.convertModelToObject(exampleModel);

    return exampleObject;
  }

  public async createExample(exampleInput: ExampleInputType): Promise<ExampleObjectType> {
    const exampleInputModel = this.convertInputToInputModel(exampleInput);
    const exampleModel = await this.commonExampleService.createExample(exampleInputModel);
    const exampleObject = this.convertModelToObject(exampleModel);

    return exampleObject;
  }

  public async updateExample(exampleId: number, exampleInput: ExampleInputType): Promise<ExampleObjectType> {
    const exampleInputModel = this.convertInputToInputModel(exampleInput);
    const exampleModel = await this.commonExampleService.updateExample(exampleId, exampleInputModel);
    const exampleObject = this.convertModelToObject(exampleModel);

    return exampleObject;
  }

  public async deleteExampleById(exampleId: number): Promise<boolean> {
    await this.commonExampleService.deleteExampleById(exampleId);

    return true;
  }

  private convertModelToObject(model: IExampleInstanceModel): ExampleObjectType {
    const object = new ExampleObjectType();

    object.id = model.id;
    object.data = model.data;
    object.createdAt = model.createdAt;
    object.updatedAt = model.updatedAt;

    return object;
  }

  private convertInputToInputModel(input: ExampleInputType): IExampleInstanceInputModel {
    const inputModel: IExampleInstanceInputModel = {
      data: input.data,
    };

    return inputModel;
  }
}
