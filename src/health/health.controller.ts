import { Controller, HttpException, HttpStatus, Get } from '@nestjs/common';
import { getConnection } from 'typeorm';

@Controller({
  path: '/health',
})
export class HealthController {
  @Get('/')
  public getHealth(): string {
    return 'API OK';
  }

  @Get('/database')
  public async getDatabaseHealth(): Promise<string> {
    try {
      const connection = getConnection();

      await connection.query('SELECT 1 = 1 AS result;');
    } catch {
      throw new HttpException('Database is not healthy.', HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return 'Database OK';
  }
}
