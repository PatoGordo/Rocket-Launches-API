import axios from "axios";
import { Request, Response } from "express";

class newsController {
  public async index(req: Request, res: Response) {
    try {
      const response = await axios.get(
        "https://www.spaceflightnewsapi.net/api/v2/articles?_limit=5"
      );
      const result = response.data;

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

export default new newsController();
