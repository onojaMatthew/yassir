import { logger } from "./logger";

export default ( err, req, res, next ) => {
  logger.error( err.message, err );

  res.status( 500 ).json( err.message );
}