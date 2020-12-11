import { Module, Global } from '@nestjs/common';

import { LoggerService } from './logger.service';
import { WinstonFactory } from './winston/winston.factory';
import { WinstonTransportFactory } from './winston/winston-transport.factory';

@Global()
@Module({
  imports: [],
  exports: [LoggerService],
  providers: [LoggerService, WinstonFactory, WinstonTransportFactory],
})
export class LoggerModule {}
