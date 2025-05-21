import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ICategoriesRepository } from "../../repositories/ICategoriesReporitory";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoriesRepository,
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const alreadyExists = await this.categoryRepository.findByName(name);

    if (alreadyExists) {
      throw new AppError("Category already exists", 400);
    }

    this.categoryRepository.create({ name, description });
  }
}
