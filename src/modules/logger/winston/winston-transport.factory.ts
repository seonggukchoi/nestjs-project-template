import { Injectable } from '@nestjs/common';
import * as Winston from 'winston';

@Injectable()
export class WinstonTransportFactory {
  public createConsoleTransport(): Winston.transport {
    return new Winston.transports.Console({
      // format: Winston.format.combine(Winston.format.json()),
      format: Winston.format.combine(Winston.format.colorize(), Winston.format.simple()),
    });
  }

  public createHTTPTransport(httpTransportOptions: Winston.transports.HttpTransportOptions): Winston.transport {
    return new Winston.transports.Http({
      ...httpTransportOptions,
      format: Winston.format.combine(Winston.format.json()),
    });
  }

  public createFileTransport(fileTransportOptions: Winston.transports.FileTransportOptions): Winston.transport {
    return new Winston.transports.File({
      ...fileTransportOptions,
      format: Winston.format.combine(Winston.format.json()),
    });
  }
}
