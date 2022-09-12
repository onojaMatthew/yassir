import error from "./error";
import air_qaulity_route from "../controllers/api";

export default (app) => {
  app.use("/api/v1", air_qaulity_route);
  app.use(error);
}