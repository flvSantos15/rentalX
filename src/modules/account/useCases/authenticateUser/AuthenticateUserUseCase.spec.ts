import { ICreateUserDTO } from "@modules/account/dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "@modules/account/repositories/in-memory/UserRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory,
    );
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it("should be able to authenticate an user", () => {
    const user: ICreateUserDTO = {
      name: "User Test",
      email: "user@test.com",
      password: "123456",
      driver_license: "AB",
    };

    createUserUseCase.execute(user);

    const response = authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(response).toHaveProperty("token");
  });

  it("should not be able to authenticate an user with incorrect password", () => {
    const user: ICreateUserDTO = {
      driver_license: "AB",
      email: "user@test.com",
      name: "User Test",
      password: "123456",
    };

    createUserUseCase.execute(user);

    expect(() => {
      authenticateUserUseCase.execute({
        email: user.email,
        password: "1234567",
      });
    }).toThrow("Email or password incorrect");
  });

  it("should not be able to authenticate an user with incorrect email", () => {
    const user: ICreateUserDTO = {
      driver_license: "AB",
      email: "user@test.com",
      name: "User Test",
      password: "123456",
    };

    createUserUseCase.execute(user);

    expect(() => {
      authenticateUserUseCase.execute({
        email: "user2@test.com",
        password: "1234567",
      });
    }).toThrow("Email or password incorrect");
  });

  it("should not be able to authenticate an nonexistent user", () => {
    expect(() => {
      authenticateUserUseCase.execute({
        email: "user2@test.com",
        password: "1234567",
      });
    }).toThrow("Email or password incorrect");
  });
});
