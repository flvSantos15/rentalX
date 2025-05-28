import { Category } from "../../infra/typeorm/entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

export class CategoryRepositoryInMemory implements ICategoriesRepository {
  categories: Category[] = [];

  create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = new Category();

    Object.assign(category, { name, description });

    this.categories.push(category);

    return Promise.resolve();
  }

  findByName(name: string): Promise<Category> {
    return Promise.resolve(
      this.categories.find((category) => category.name === name),
    );
  }

  list(): Promise<Category[]> {
    return Promise.resolve(this.categories);
  }
}
