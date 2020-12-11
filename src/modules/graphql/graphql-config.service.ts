import { Injectable } from '@nestjs/common';
import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';
import config from 'config';

@Injectable()
export class GraphQLConfigService implements GqlOptionsFactory {
  public createGqlOptions(): GqlModuleOptions {
    return {
      cors: config.get<string>('application.cors'),
      debug: config.get<boolean>('application.graphql.debug'),
      playground: config.get<boolean>('application.graphql.playground'),
      path: config.get<string>('application.graphql.path'),
      autoSchemaFile: true,
    };
  }
}
