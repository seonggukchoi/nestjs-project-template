import { Resolver, Query } from '@nestjs/graphql';

import { BusinessHealthService } from '@app/business/health';

@Resolver()
export class HealthResolver {
  constructor(private readonly businessHealthService: BusinessHealthService) {}

  @Query((returns) => Boolean)
  public health(): boolean {
    const isHealth = this.businessHealthService.isHealthy();

    return isHealth;
  }

  @Query((returns) => Boolean)
  public async databaseHealth(): Promise<boolean> {
    const isDatabaseHealthy = await this.businessHealthService.isDatabaseHealthy();

    return isDatabaseHealthy;
  }
}
