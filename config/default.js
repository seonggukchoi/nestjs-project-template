/* eslint-disable */

module.exports = {
  application: {
    port: 10000,
    cors: true,
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
};