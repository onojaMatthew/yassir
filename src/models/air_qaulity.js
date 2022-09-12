import mongoose, { Schema } from "mongoose";

const airqualitySchema = new Schema({
  ts: { type: Date, default: Date.now()},
  aqius: { type: Number },
  mainus: { type: String },
  aqicn: { type: Number },
  maincn: { type: String }
});

export const AirQuality = mongoose.model("AirQuality", airqualitySchema);