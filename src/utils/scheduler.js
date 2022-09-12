import job from "node-cron";
import { save_air_quality } from "../controllers/controller";
import { logger } from "../middleware/logger";
import { nearest_city_air_quality } from "./third_party";

export const scheduler = () => {
  try {
    const latitude = "48.856613";
    const longitude = "2.352222";

    job.schedule("* * * * *", async () => {
      const result = await nearest_city_air_quality(latitude, longitude);
      save_air_quality(result.Pollution);
    });
  } catch (err) {
    logger(err.message, err);
  }
}