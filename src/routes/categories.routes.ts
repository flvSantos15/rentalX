import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router()
const categoryRepository = new CategoriesRepository()

// @ts-ignore
categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body

  categoryRepository.create({ name, description })

  return res.status(201).send()
})

export { categoriesRoutes };

