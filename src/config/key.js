import path from "path";
require("dotenv").config({ path: path.resolve(__dirname + "/../../.env")});

export default ({
  image_processor_api: process.env.IMG_PROCESSOR_API,
  db_name: process.env.DB_NAME,
  db_host: process.env.DB_HOST,
  db_password: process.env.DB_PASSWORD,
  db_user: process.env.DB_USER,
  dev_db_name: process.env.DEV_DB_NAME,
  dev_db_user: process.env.DEV_DB_USER,
  dev_db_host: process.env.DEV_DB_HOST,
  dev_db_password: process.env.DEV_DB_PASSWORD,
  test_db_name: process.env.TEST_DB_NAME,
  test_db_user: process.env.TEST_DB_USER,
  test_db_host: process.env.TEST_DB_HOST,
  test_db_password: process.env.TEST_DB_PASSWORD,
  API_KEY: process.env.API_KEY,
});