import path from "path";
require("dotenv").config({ path: path.resolve(__dirname + "/../../.env")});

export default ({
  DB_URL: process.env.DB_URL,
  TEST_DB: process.env.TEST_DB,
  API_KEY: process.env.API_KEY,
});