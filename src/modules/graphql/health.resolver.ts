import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class HealthResolver {
  @Query((type) => Boolean)
  public health(): boolean {
    return true;
  }
}
