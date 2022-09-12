import express from "express";
import { get_air_quality } from "./controller";

const router = express.Router();

router.get("/nearest_city_air_quality/:latitude/:longitude", get_air_quality);

export default router;