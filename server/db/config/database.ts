import * as Sequelize from "sequelize";

let db: Sequelize.Sequelize;

if (process.env.ESQL_URL) {
  console.log("this is the esqlurl", process.env.ESQL_URL);
  db = new Sequelize(process.env.ESQL_URL, {
    dialect: "postgres"
  });
  console.log("Connected to remote db");
} else {
  db = new Sequelize("Bears-02", "root", "", {
    host: "localhost",
    dialect: "mysql"
  });
  console.log("connected to db locally");
}

db.authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch(err => console.error("Unable to connect to the database:", err));

export default db;
