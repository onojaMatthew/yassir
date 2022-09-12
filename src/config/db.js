import path from "path";
require( "dotenv" ).config({ path: path.resolve(__dirname + "/../../.env" )});
import mongoose from "mongoose";
import { logger } from "../middleware/logger";
import key from "../config/key";

let db_url;
const env = process.env.NODE_ENV || 'development';

if ( env === "development" ) {
  db_url = `mongodb+srv://${key.dev_db_user}:${key.dev_db_password}@${key.dev_db_host}/${key.db_name}`;
} else if (env === "test") {
  db_url = `mongodb+srv://${key.dev_db_user}:${key.dev_db_password}@${key.dev_db_host}/${key.db_name}`;
} else {
  db_url = `mongodb+srv://${key.db_user}:${key.db_password}@${key.db_host}/${key.db_name}`;
}

// mongodb+srv://gigAlpha:m0lHCAYrEccmirHX@cluster1.uzfdh.mongodb.net/gigAlphaProduct

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