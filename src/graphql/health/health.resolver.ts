import { Resolver, Query } from '@nestjs/graphql';

import { HealthService } from '@app/common/health';

@Resolver()
export class HealthResolver {
  constructor(private readonly healthService: HealthService) {}

  @Query((returns) => Boolean)
  public health(): boolean {
    const isHealth = this.healthService.isHealthy();

    return isHealth;
  }

  @Query((returns) => Boolean)
  public async databaseHealth(): Promise<boolean> {
    const isDatabaseHealthy = await this.healthService.isDatabaseHealthy();

    return isDatabaseHealthy;
  }
}
