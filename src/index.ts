import express, { json, Express } from "express";
import "express-async-errors";

import carsRouter from "./routes/carsRouter.js";
import handleErrorsMiddleware from "./middlewares/errorHandlerMiddleware.js";
import { connectDb } from "./config/database.js";

const app = express();
app.use(json());
app.use(carsRouter);
app.use(handleErrorsMiddleware);

export function init(): Express {
  connectDb();
  return app;
}
