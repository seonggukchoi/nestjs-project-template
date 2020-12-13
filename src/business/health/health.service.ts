import { Injectable } from '@nestjs/common';

import { CommonHealthService } from '@app/common/health';

@Injectable()
export class BusinessHealthService {
  constructor(private readonly commonHealthService: CommonHealthService) {}

  public isHealthy(): boolean {
    const isHealthy = this.commonHealthService.isHealthy();

    return isHealthy;
  }

  public async isDatabaseHealthy(): Promise<boolean> {
    const isDatabaseHealthy = await this.commonHealthService.isDatabaseHealthy();

    return isDatabaseHealthy;
  }
}
