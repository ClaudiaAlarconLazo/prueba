const { Pool } = require('pg');

const configuration = {
  user: 'postgres',
  password: 'inacap.2019',
  host: 'localhost',
  port: 5432,
  database: 'bike_shop',
};

const pool = new Pool(configuration);