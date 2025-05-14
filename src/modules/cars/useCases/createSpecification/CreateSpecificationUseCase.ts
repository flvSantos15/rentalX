import { ISpecificationsRepository } from "../../repositories/implementations/ISpecificationRepository";

interface IRequest {
  name: string
  description: string
}

export class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest) {
    const specificationAlreadyExists = this.specificationRepository.findByName(name)

    if (specificationAlreadyExists) {
      throw new Error("Specification already exists")
    }

    this.specificationRepository.create({ name, description })
  }
}