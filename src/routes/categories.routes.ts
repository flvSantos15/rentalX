import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router()
const categoryRepository = new CategoriesRepository()

// @ts-ignore
categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body

  const alreadyExists = categoryRepository.findByName(name)

  if (alreadyExists) {
    return res.status(400).json({ error: "Category already exists" })
  }

  categoryRepository.create({ name, description })

  return res.status(201).send()
})

// @ts-ignore
categoriesRoutes.get('/', (req, res) => {
  const categories = categoryRepository.list()

  return res.status(200).json(categories)
})

export { categoriesRoutes };

