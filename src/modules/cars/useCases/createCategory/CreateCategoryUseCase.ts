import { inject, injectable } from "tsyringe"
import { ICategoriesRepository } from "../../repositories/ICategoriesReporitory"

interface IRequest {
  name: string
  description: string
}

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoriesRepository) {}

  async execute({ name, description }: IRequest): Promise<void> {
    
    const alreadyExists = await this.categoryRepository.findByName(name)

    if (alreadyExists) {
      throw new Error("Category already exists")
    }

    this.categoryRepository.create({ name, description })
  }
}
