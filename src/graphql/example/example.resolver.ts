import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

import { BusinessExampleService, ExampleObjectType, ExampleInputType } from '@app/business/example';

@Resolver()
export class ExampleResolver {
  constructor(private readonly businessExampleService: BusinessExampleService) {}

  @Query((returns) => ExampleObjectType)
  public async getExample(@Args('exampleId', { type: () => Int }) exampleId: number): Promise<ExampleObjectType> {
    const exampleObject = await this.businessExampleService.getExampleById(exampleId);

    return exampleObject;
  }

  @Mutation((returns) => ExampleObjectType)
  public async createExample(
    @Args('example', { type: () => ExampleInputType }) exampleInput: ExampleInputType,
  ): Promise<ExampleObjectType> {
    const exampleObject = await this.businessExampleService.createExample(exampleInput);

    return exampleObject;
  }

  @Mutation((returns) => ExampleObjectType)
  public async updateExample(
    @Args('exampleId', { type: () => Int }) exampleId: number,
    @Args('example', { type: () => ExampleInputType }) exampleInput: ExampleInputType,
  ): Promise<ExampleObjectType> {
    const exampleObject = await this.businessExampleService.updateExample(exampleId, exampleInput);

    return exampleObject;
  }

  @Mutation((returns) => Boolean)
  public async deleteExample(@Args('exampleId', { type: () => Int }) exampleId: number): Promise<boolean> {
    await this.businessExampleService.deleteExampleById(exampleId);

    return true;
  }
}
