import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router()
const categoryRepository = new CategoriesRepository()

// @ts-ignore
categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body

  const createCategoryService = new CreateCategoryService(categoryRepository)
  createCategoryService.execute({ name, description })

  return res.status(201).send()
})

// @ts-ignore
categoriesRoutes.get('/', (req, res) => {
  const categories = categoryRepository.list()

  return res.status(200).json(categories)
})

export { categoriesRoutes };

