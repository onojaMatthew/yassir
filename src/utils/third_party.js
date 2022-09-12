import axios from "axios";
import key from "../config/key";
import { logger } from "../middleware/logger";

export const nearest_city_air_quality = async (latitude, longitude) => {
  try {
    let results = {};
    const response = await axios.get(`http://api.airvisual.com/v2/nearest_city?lat=${latitude}&lon=${longitude}&key=${key.API_KEY}`, {
      headers: {
        "Content-Type": "application/json",
        ACCEPT: "application/json"
      }
    });

    const data = response.data
    results["Pollution"] = data.data.current.pollution;
    return results;
  } catch (err) {
    logger.error(err.message, err);
  }
}