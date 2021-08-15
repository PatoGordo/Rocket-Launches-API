import express, { Application } from "express";
import cors from "cors";
import { routes } from "./routes";

class App {
  public app: Application;

  constructor() {
    this.app = express();

    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private routes() {
    this.app.use(routes);
  }
}

export default new App().app;
