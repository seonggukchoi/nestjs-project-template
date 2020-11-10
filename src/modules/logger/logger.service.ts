import { Injectable, LoggerService as ILoggerService } from '@nestjs/common';
import * as Winston from 'winston';
import * as chalk from 'chalk';

import { WinstonFactory } from './winston/winston.factory';

@Injectable()
export class LoggerService implements ILoggerService {
  protected logger: Winston.Logger;

  constructor(private readonly winstonFactory: WinstonFactory) {
    this.logger = this.winstonFactory.createWinstonLogger();
  }

  public info(message: string, context?: string, metadata?: any): void {
    const coloredMessage = this.chalkMessage(message, context);

    this.logger.info(coloredMessage, metadata);
  }

  public error(message: string, trace?: string, context?: string, metadata?: any): void {
    const coloredMessage = this.chalkMessage(message, context);

    this.logger.error(coloredMessage, { trace, ...metadata });
  }

  public warn(message: string, context?: string, metadata?: any): void {
    const coloredMessage = this.chalkMessage(message, context);

    this.logger.warn(coloredMessage, metadata);
  }

  public debug(message: string, context?: string, metadata?: any): void {
    const coloredMessage = this.chalkMessage(message, context);

    this.logger.debug(coloredMessage, metadata);
  }

  public log(message: string, context?: string, metadata?: any): void {
    const coloredMessage = this.chalkMessage(message, context);

    this.logger.verbose(coloredMessage, metadata);
  }

  public verbose(message: string, context?: string, metadata?: any): void {
    const coloredMessage = this.chalkMessage(message, context);

    this.logger.verbose(coloredMessage, metadata);
  }

  protected chalkMessage(message: string, context?: string): string {
    const coloredContext = chalk.yellow(context ? `[${context}]` : '');
    const coloredMessage = chalk.green(message);

    return `${coloredContext} ${coloredMessage}`.trim();
  }
}
