import { Resolver, Query } from '@nestjs/graphql';

import { CommonHealthService } from '@app/common/health';

@Resolver()
export class HealthResolver {
  constructor(private readonly commonHealthService: CommonHealthService) {}

  @Query((returns) => Boolean)
  public health(): boolean {
    const isHealth = this.commonHealthService.isHealthy();

    return isHealth;
  }

  @Query((returns) => Boolean)
  public async databaseHealth(): Promise<boolean> {
    const isDatabaseHealthy = await this.commonHealthService.isDatabaseHealthy();

    return isDatabaseHealthy;
  }
}
