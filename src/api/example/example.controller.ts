import { Controller, Get, Post, Patch, Delete, Param, ParseIntPipe, Body } from '@nestjs/common';

import { BusinessExampleService } from '@app/business/example';

import { ExampleObjectType, ExampleInputType } from './types';

@Controller('/examples')
export class ExampleController {
  constructor(private readonly businessExampleService: BusinessExampleService) {}

  @Get('/:exampleId')
  public async getExample(@Param('exampleId', ParseIntPipe) exampleId: number): Promise<ExampleObjectType> {
    const exampleObject = await this.businessExampleService.getExampleById(exampleId);

    return exampleObject;
  }

  @Post('/')
  public async createExample(@Body() exampleInput: ExampleInputType): Promise<ExampleObjectType> {
    const exampleObject = await this.businessExampleService.createExample(exampleInput);

    return exampleObject;
  }

  @Patch('/:exampleId')
  public async updateExample(
    @Param('exampleId', ParseIntPipe) exampleId: number,
    @Body() exampleInput: ExampleInputType,
  ): Promise<ExampleObjectType> {
    const exampleObject = await this.businessExampleService.updateExample(exampleId, exampleInput);

    return exampleObject;
  }

  @Delete('/:exampleId')
  public async deleteExample(@Param('exampleId', ParseIntPipe) exampleId: number): Promise<boolean> {
    await this.businessExampleService.deleteExampleById(exampleId);

    return true;
  }
}
