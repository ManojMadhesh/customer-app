const env = {
  database: 'manojdb',
  username: 'root',
  password: 'bharani',
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
 
module.exports = env;