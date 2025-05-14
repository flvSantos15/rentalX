import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

const categoriesRoutes = Router()
const categoryRepository = new CategoriesRepository()

// @ts-ignore
categoriesRoutes.post('/', (req, res) => {
  return createCategoryController.handle(req, res)
})

// @ts-ignore
categoriesRoutes.get('/', (req, res) => {
  const categories = categoryRepository.list()

  return res.status(200).json(categories)
})

export { categoriesRoutes };

