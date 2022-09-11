import path from "path";
require("dotenv").config({ path: path.resolve(__dirname + "/../../.env")});
import express from "express";
import morgan from "morgan";
import db from "./config/db";
import router from "./middleware/router";
import { logger } from "./middleware/logger";
import { prod } from "./middleware/prod";

const port = process.env.PORT || 5000;

const app = express();

prod(app);
db();

app.use(express.static(path.resolve(__dirname, "../")))
app.use(morgan("dev"));
app.use(express.json());
app.use( ( req, res, next ) => {
  res.header( "Access-Control-Allow-Origin", "*" );
  res.header( "Access-Control-Allow-Credentials", true );
  res.header( "Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH" );
  res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Authorization, Content-Type, Accept, X-Auth-Token' );

  next();
});



// root route
app.get("/", (req, res) => {
  res.json({ message: "WELCOME TO YASSIR ASSESSMENT API" });
});


router(app);

// error logger
logger;

app.listen(port, () => {
  logger.info(`Server is up and running on port ${port}`);
});

export default app;