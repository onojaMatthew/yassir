import { logger } from "../middleware/logger";
import { error, success } from "../middleware/response";
import { AirQuality } from "../models/air_qaulity";
import { nearest_city_air_quality } from "../utils/third_party";

export const get_air_quality = async (req, res) => {
  try {
    const { longitude, latitude } = req.params;
    const results = await nearest_city_air_quality(latitude, longitude)
    return res.json(success(results));
  } catch (err) {
    logger.error(err.message, err);
    return res.status(500).json(error(err.message, res.statusCode));
  }
}

export const create_air_quality = async (data) => {
  try {
    const { aqius, mainus, aqicn, maincn } = data;
    let new_airQuality = await AirQuality({ ts: new Date(), aqius, mainus, aqicn, maincn });
    new_airQuality = await new_airQuality.save();
    console.log(new_airQuality);
  } catch (err) {
    logger.error(err.message, err);
  }
}