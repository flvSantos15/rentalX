import { inject, injectable } from "tsyringe"
import { Category } from "../../entities/Category"
import { ICategoriesRepository } from "../../repositories/ICategoriesReporitory"

@injectable()
export class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoriesRepository) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoryRepository.list()

    return categories
  }
}
