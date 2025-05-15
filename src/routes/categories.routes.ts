import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router()

const upload = multer({ dest: "./tmp" })

// @ts-ignore
categoriesRoutes.post('/', (req, res) => {
  return createCategoryController.handle(req, res)
})

// @ts-ignore
categoriesRoutes.get('/', (req, res) => {
  return listCategoriesController.handle(req, res)
})

// @ts-ignore
categoriesRoutes.post('/import', upload.single("file"), (req, res) => {
  return importCategoryController.handle(req, res)
})

export { categoriesRoutes };

