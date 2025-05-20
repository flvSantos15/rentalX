import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesReporitory";
import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificationRepository";

import { IUsersRepository } from "../../modules/account/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/account/repositories/implementations/UsersRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";
import { SpecificationRepository } from "../../modules/cars/repositories/implementations/SpecificationRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository,
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationRepository",
  SpecificationRepository,
);

container.registerSingleton<IUsersRepository>(
  "UserRepository",
  UsersRepository,
);
