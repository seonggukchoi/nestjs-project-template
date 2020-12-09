import { Controller, HttpException, HttpStatus, Get } from '@nestjs/common';
import { getConnection } from 'typeorm';

import { LoggerService } from '@app/modules/logger';

@Controller({
  path: '/health',
})
export class HealthController {
  constructor(private readonly loggerService: LoggerService) {}

  @Get('/')
  public getHealth(): string {
    this.loggerService.debug('Checked an API status through API.', 'HealthController');

    return 'API OK';
  }

  @Get('/database')
  public async getDatabaseHealth(): Promise<string> {
    this.loggerService.debug('Checked a database status through API.', 'HealthController');

    try {
      const connection = getConnection();

      await connection.query('SELECT 1 = 1 AS result;');
    } catch {
      throw new HttpException('Database is not healthy.', HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return 'Database OK';
  }
}
