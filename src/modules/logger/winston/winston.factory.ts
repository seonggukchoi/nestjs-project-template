import { Injectable } from '@nestjs/common';
import * as Winston from 'winston';
import config from 'config';

import { WinstonTransportFactory } from './winston-transport.factory';
import { LoggerTransportType } from '../logger.interface';
import { LOG_LEVELS, LOG_COLORS } from '../logger.constant';

@Injectable()
export class WinstonFactory {
  constructor(private readonly winstonTransportFactory: WinstonTransportFactory) {}

  public createWinstonLogger(): Winston.Logger {
    const defaultLevel = config.get<keyof typeof LOG_LEVELS>('logger.level');

    Winston.addColors(LOG_COLORS);

    const logger = Winston.createLogger({
      level: defaultLevel,
      levels: LOG_LEVELS,
      defaultMeta: {
        timestamp: new Date().getTime(),
        environment: process.env.NODE_ENV,
      },
    });

    this.addTransports(logger);

    return logger;
  }

  public addTransports(logger: Winston.Logger): void {
    const transports = config.get<LoggerTransportType[]>('logger.transports');

    if (transports.includes('console')) {
      logger.add(this.winstonTransportFactory.createConsoleTransport());
    }

    if (transports.includes('http')) {
      const httpTransportOptions = config.get<Winston.transports.HttpTransportOptions>('logger.httpTransportOptions');

      logger.add(this.winstonTransportFactory.createHTTPTransport(httpTransportOptions));
    }

    if (transports.includes('file')) {
      const fileTransportOptions = config.get<Winston.transports.FileTransportOptions>('logger.fileTransportOptions');

      logger.add(this.winstonTransportFactory.createFileTransport(fileTransportOptions));
    }
  }
}
