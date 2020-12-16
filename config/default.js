/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const dotenv = require('dotenv');
const path = require('path');

const defaultDotenvPath = path.join(__dirname, '../');

[
  path.join(defaultDotenvPath, '.env.local'),
  path.join(defaultDotenvPath, `.env.${process.env.NODE_ENV}.local`),
  path.join(defaultDotenvPath, `.env.${process.env.NODE_ENV}`),
  path.join(defaultDotenvPath, '.env'),
].forEach((path) => dotenv.config({ path }));

module.exports = {
  application: {
    port: 10000,
    cors: true,
    graphql: {
      path: '/graphql',
      debug: true,
      playground: true,
    },
    useNativeLogger: true,
    useCustomLogger: true,
  },
  logger: {
    level: 'verbose',
    transports: ['console'],
    httpTransportOptions: {
      host: 'localhost',
      port: 10000,
    },
  },
  database: {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: 'project',
    migrationsTableName: '_migrations',
    migrations: ['./dist/migrations/*.js'],
    synchronize: true,
    logging: ['query', 'error'],
    extra: {
      connectionLimit: 30,
    },
    cli: {
      migrationsDir: 'migrations',
    },
  },
  redis: {
    host: 'localhost',
    port: 6379,
  },
};
