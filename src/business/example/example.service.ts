import { Injectable } from '@nestjs/common';

import {
  CommonExampleService,
  IExampleInstanceModel,
  ICreateExampleInstanceInputModel,
  IUpdateExampleInstanceInputModel,
} from '@app/common/example';

import { IExampleTransportModel, IExampleTransportInputModel } from './transport-models';

@Injectable()
export class BusinessExampleService {
  constructor(private readonly commonExampleService: CommonExampleService) {}

  public async getExampleById(exampleId: number): Promise<IExampleTransportModel> {
    const exampleModel = await this.commonExampleService.getExampleById(exampleId);
    const exampleObject = this.convertModelToObject(exampleModel);

    return exampleObject;
  }

  public async createExample(exampleInput: IExampleTransportInputModel): Promise<IExampleTransportModel> {
    const exampleInputModel = this.convertInputToCreateInputModel(exampleInput);
    const exampleModel = await this.commonExampleService.createExample(exampleInputModel);
    const exampleObject = this.convertModelToObject(exampleModel);

    return exampleObject;
  }

  public async updateExample(
    exampleId: number,
    exampleInput: IExampleTransportInputModel,
  ): Promise<IExampleTransportModel> {
    const exampleInputModel = this.convertInputToUpdateInputModel(exampleInput);
    const exampleModel = await this.commonExampleService.updateExample(exampleId, exampleInputModel);
    const exampleObject = this.convertModelToObject(exampleModel);

    return exampleObject;
  }

  public async deleteExampleById(exampleId: number): Promise<boolean> {
    await this.commonExampleService.deleteExampleById(exampleId);

    return true;
  }

  private convertModelToObject(model: IExampleInstanceModel): IExampleTransportModel {
    const object: IExampleTransportModel = {
      id: model.id,
      data: model.data,
      createdAt: model.createdAt,
      updatedAt: model.updatedAt,
    };

    return object;
  }

  private convertInputToCreateInputModel(input: IExampleTransportInputModel): ICreateExampleInstanceInputModel {
    const inputModel: ICreateExampleInstanceInputModel = {
      data: input.data,
    };

    return inputModel;
  }

  private convertInputToUpdateInputModel(input: IExampleTransportInputModel): IUpdateExampleInstanceInputModel {
    const inputModel: IUpdateExampleInstanceInputModel = {
      data: input.data,
    };

    return inputModel;
  }
}
