import path from "path";
require( "dotenv" ).config({ path: path.resolve(__dirname + "/../../.env" )});
import mongoose from "mongoose";
import { logger } from "../middleware/logger";
import key from "../config/key";

let db_url;
const env = process.env.NODE_ENV || 'development';

if ( env === "development" ) {
  db_url = key.DB_URL;
} else if (env === "test") {
  db_url = key.TEST_DB;
}

export default () => {
  mongoose.Promise = global.Promise;
  mongoose.connect( db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 100000,
  } )
    .then( () => {
      logger.info("Connection to database established");
    } )
    .catch( err => {
      logger.error(`Connection failed. ${ err.message }`);
    } );
}