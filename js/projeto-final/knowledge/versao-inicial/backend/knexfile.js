// Update with your config settings.
const { db } = require('./.env');
module.exports = {
  client: 'postgresql',
  connection: db,//{
  // database: 'my_db',
  // user:     'username',
  //password: 'password'
  //},
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
