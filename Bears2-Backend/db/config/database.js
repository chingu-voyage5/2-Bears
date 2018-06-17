require('dotenv').config();
require('dotenv').load();

const Sequelize = require('sequelize');

let db = null;

if (process.env.ESQL_URL) {
  console.log("this is the esqlurl", process.env.ESQL_URL)
  db = new Sequelize(process.env.ESQL_URL, {
    dialect: 'postgres',
  })
  // .then(response => {
  //   console.log("this is the response or error", response);
  // })
  // .catch(err => {
  //   console.log("this is the error in db", err);
  // })
  console.log('Connected to remote db');
} else {
  db = new Sequelize('Bears-02', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
  });
  console.log('connected to db locally');
}
db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = db;
