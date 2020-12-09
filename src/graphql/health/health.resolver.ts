import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class HealthResolver {
  @Query((returns) => Boolean)
  public health(): boolean {
    return true;
  }
}
