/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const dotenv = require('dotenv');
const path = require('path');

const defaultDotenvPath = path.join(__dirname, '../');

[
  path.join(defaultDotenvPath, '.env.local'),
  path.join(defaultDotenvPath, `.env.${process.env.NODE_ENV}.local`),
  path.join(defaultDotenvPath, `.env.${process.env.NODE_ENV}`),
  path.join(defaultDotenvPath, '.env'),
].forEach((path) => dotenv.config({ path }));
