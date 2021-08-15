import { NextFunction, Request, Response } from "express";
import { Router } from "express";
import launchesController from "../controllers/launches";
import newsController from "../controllers/news";

const routes = Router();

routes.get("/launches", launchesController.index);
routes.get("/news", newsController.index);

routes.get("/", (req, res) => {
  return res.status(200).send(`
  <div>
    <h2>Welcome to Rocket Launches API</h2>
    <h3>End points</h3>
    <a href="/launches">/launches [GET]</a><br />
    <a href="/news">/news [GET]</a>
    <br />
    <br />
    <br />
    <a href="https://github.com/PatoGordo/Rocket-Launches-API">Github Project</a>
    <br />
    <a href="https://github.com/PatoGordo/Rocket-Launches">Website</a>
  </div>
  `);
});

export { routes };
