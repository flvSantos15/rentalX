import { Category } from "../../entities/Category"
import { ICategoriesRepository } from "../../repositories/implementations/ICategoriesReporitory"

export class ListCategoriesUseCase {
  constructor(private categoryRepository: ICategoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoryRepository.list()

    return categories
  }
}
