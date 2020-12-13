/* eslint-disable */

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
    username: 'project',
    password: 'Project2020!',
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
  }
};
