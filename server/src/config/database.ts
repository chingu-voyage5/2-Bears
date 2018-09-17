import * as Sql from "sequelize";

export default class Postgres {
  private static _instance: Sql.Sequelize;

  static get instance() {
    if (this._instance) {
      if (process.env.ESQL_URL) {
        console.log("Connecting to remote db");
        this._instance = new Sql(process.env.ESQL_URL, {
          dialect: "postgres"
        });
      } else {
        console.log("Connecting to db locally");
        this._instance = new Sql("Bears-02", "root", "", {
          host: "localhost",
          dialect: "mysql"
        });
      }

      this._instance
        .authenticate()
        .then(() => "Connection has been established successfully.")
        .catch(err => console.error("Unable to connect to the database:", err));
    }

    return this._instance;
  }
}
