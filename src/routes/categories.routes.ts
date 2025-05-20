import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "../modules/cars/useCases/listCategories/ListCategoriesController";

const categoriesRoutes = Router();

const upload = multer({ dest: "./tmp" });

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

// @ts-ignore
categoriesRoutes.post("/", createCategoryController.handle);

// @ts-ignore
categoriesRoutes.get("/", listCategoriesController.handle);

// @ts-ignore
categoriesRoutes.post(
  "/import",
  upload.single("file"),
  importCategoryController.handle,
);

export { categoriesRoutes };
