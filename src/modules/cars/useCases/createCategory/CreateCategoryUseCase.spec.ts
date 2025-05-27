import { AppError } from "../../../../errors/AppError";
import { CategoryRepositoryInMemory } from "../../repositories/in-memory/CategoryReporitoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let repository: CategoryRepositoryInMemory;
let createCategoryUseCase: CreateCategoryUseCase;

describe("Create Category", () => {
  beforeEach(() => {
    repository = new CategoryRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(repository);
  });

  it("should create a new category", async () => {
    const category = {
      name: "Category",
      description: "Category description",
    };

    await createCategoryUseCase.execute(category);

    const foundCategory = await repository.list();

    expect(foundCategory).toHaveLength(1);
  });

  it("should throw error if category already exists", async () => {
    await expect(async () => {
      const category = {
        name: "Category",
        description: "Category description",
      };

      await createCategoryUseCase.execute(category);
    }).rejects.toBeInstanceOf(AppError);
  });
});
