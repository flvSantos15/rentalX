import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ISpecificationsRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
export class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationsRepository,
  ) {}

  async execute({ name, description }: IRequest) {
    const specificationAlreadyExists =
      await this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new AppError("Specification already exists", 400);
    }

    await this.specificationRepository.create({ name, description });
  }
}
