import { CategoriesRepository } from "../repositories/CategoriesRepository"

interface IRequest {
  name: string
  description: string
}

export class CreateCategoryService {
  constructor(private categoryRepository: CategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    
    const alreadyExists = this.categoryRepository.findByName(name)

    if (alreadyExists) {
      throw new Error("Category already exists")
    }

    this.categoryRepository.create({ name, description })
  }

}
