import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import swaggerUi from "swagger-ui-express";
import swaggerFile from "../../../../swagger.json";

import "../../container";
import "../../typeorm";

import { AppError } from "@shared/errors/AppError";
import { router } from "./routes";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(
  // @ts-ignore
  (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({
        message: err.message,
      });
    }

    return res.status(500).json({
      message: `Internal server error: ${err.message}`,
    });
  },
);

app.listen(3333, () => console.log("Server is running"));
