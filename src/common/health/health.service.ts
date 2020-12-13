import { Injectable } from '@nestjs/common';
import { getConnection } from 'typeorm';

@Injectable()
export class CommonHealthService {
  public isHealthy(): boolean {
    return true;
  }

  public async isDatabaseHealthy(): Promise<boolean> {
    const connection = getConnection();

    let isDatabaseHealthy = false;

    try {
      await connection.query('SELECT 1 = 1 AS result;');

      isDatabaseHealthy = true;
    } catch (error) {
      isDatabaseHealthy = false;
    }

    return isDatabaseHealthy;
  }
}
