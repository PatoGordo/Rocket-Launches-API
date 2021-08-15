import axios from "axios";
import { Request, Response } from "express";

class launchesController {
  public async index(req: Request, res: Response) {
    try {
      const response = await axios.get(
        "https://fdo.rocketlaunch.live/json/launches/next/5"
      );
      const result = response.data.result;

      res.status(200).json({
        result,
      });
    } catch (err) {
      res.status(400).json({
        err,
      });
    }
  }
}

export default new launchesController();
