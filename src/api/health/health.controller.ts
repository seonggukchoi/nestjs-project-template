import { Controller, HttpException, HttpStatus, Get } from '@nestjs/common';

import { LoggerService } from '@app/modules/logger';
import { HealthService as CommonHealthService } from '@app/common/health';

@Controller({
  path: '/health',
})
export class HealthController {
  constructor(
    private readonly loggerService: LoggerService,
    private readonly commonHealthService: CommonHealthService,
  ) {}

  @Get('/')
  public getHealth(): string {
    this.loggerService.debug('Checked an API status through API.', 'HealthController');

    const isHealthy = this.commonHealthService.isHealthy();

    if (!isHealthy) {
      throw new HttpException('API is not healthy.', HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return 'API OK';
  }

  @Get('/database')
  public async getDatabaseHealth(): Promise<string> {
    this.loggerService.debug('Checked a database status through API.', 'HealthController');

    const isDatabaseHealth = await this.commonHealthService.isDatabaseHealthy();

    if (!isDatabaseHealth) {
      throw new HttpException('Database is not healthy.', HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return 'Database OK';
  }
}
