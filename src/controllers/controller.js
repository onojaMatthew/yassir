import moment from "moment";
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
    return res.status(500).json(error(err.message, res.statusCode));
  }
}

export const save_air_quality = async (data) => {
  try {
    const { aqius, mainus, aqicn, maincn } = data;
    let new_airQuality = await AirQuality({ ts: new Date(), aqius, mainus, aqicn, maincn });
    await new_airQuality.save();
  } catch (err) {
    logger.error(err.message);
  }
}

export const most_polluted_time = async (req, res) => {
  try {
    let Result = {}
    const result = await AirQuality.aggregate([{$sort:{ aqius:-1 }}, { $limit:1 }]);
    const date = result && result[0] && result[0].ts
    
    Result["date"] = moment(date).format("YYYY-MM-DD");
    Result["time"] = moment(date).format("LTS");
    return res.json(success(Result));
  } catch (err) {
    return res.status(500).json(error(err.message, res.statusCode));
  }
}