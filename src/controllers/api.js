import express from "express";
import { get_air_quality, most_polluted_time } from "./controller";

const router = express.Router();

router.get("/nearest_city_air_quality/:latitude/:longitude", get_air_quality);
router.get("/most_polluted_time", most_polluted_time);

export default router;