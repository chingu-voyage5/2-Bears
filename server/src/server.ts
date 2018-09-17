import * as express from "express";
import * as dotenv from "dotenv";
import * as bodyparser from "body-parser";
import { createServer } from "http";
import router from "./api/routes";

dotenv.config();
dotenv.load();

const app = express();

app.use(bodyparser.json({ limit: "50mb" }));
app.use(bodyparser.urlencoded({ limit: "50mb", extended: true }));
app.use("/api", router);

const server = createServer(app);
const PORT = process.env.PORT || 5000;

server.on("error", err => {
  console.log("There was an error connecting to the Server ", err);
});

server.on("listening", () => {
  console.log("You have connected to the server on PORT: ", PORT);
  console.log("╔═══════════════════╗");
  console.log("║                   ║");
  console.log("║  Hi!              ║");
  console.log("║    Server         ║");
  console.log("║          is       ║");
  console.log("║            up     ║");
  console.log("╚═══════════════════╝");
  console.log("Bears Backend!!");
});

server.listen(PORT);

// User.findAll({
// });

// Catches errors to routes.
app.use(
  (
    err: any,
    _: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if (res.headersSent) {
      return next(err);
    }
    res.status(500).send(err);
  }
);

export default app;
