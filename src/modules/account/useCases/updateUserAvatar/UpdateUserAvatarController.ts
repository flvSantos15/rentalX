import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";

export class UpdateUserAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const avatar_file = request.file.filename;

    const updatedUserAvatarUserCase = container.resolve(
      UpdateUserAvatarUseCase,
    );

    await updatedUserAvatarUserCase.execute({
      user_id: id,
      avatar_file,
    });

    return response.status(204).send();
  }
}
