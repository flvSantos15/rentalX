import { UsersRepository } from "@modules/account/infra/typeorm/repositories/UsersRepository";
import { AppError } from "@shared/errors/AppError";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: userId } = verify(
      token,
      "9d0d50f8863ffae2c512429af8dba9f5",
    ) as IPayload;

    const usersRepository = new UsersRepository();

    const user = usersRepository.findById(userId);

    if (!user) {
      throw new AppError("User does not exists!", 401);
    }

    request.user = {
      id: userId,
    };

    next();
  } catch (error) {
    throw new AppError("Invalid token!", 401);
  }
}
