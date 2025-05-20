import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    name,
    email,
    username,
    driver_license,
    password,
  }: ICreateUserDTO): Promise<void> {
    // const userAlreadyExists = await this.usersRepository.findByEmail(email);

    // if (userAlreadyExists) {
    //   throw new Error("User already exists");
    // }

    this.usersRepository.create({
      name,
      email,
      username,
      driver_license,
      password,
    });

    return;
  }
}
