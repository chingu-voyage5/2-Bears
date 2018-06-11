require('dotenv').config();
require('dotenv').load();

const Sequelize = require('sequelize');

let db = null;

if (process.env.ESQL_URL) {
  console.log("this is the esqlurl", process.env.ESQL_URL)
  db = new Sequelize(process.env.ESQL_URL, {
    dialect: 'postgres',
  });
  console.log('Connected to remote db');
} else {
  db = new Sequelize('Bears-02', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
  });
  console.log('connected to db locally');
}


module.exports = db;
