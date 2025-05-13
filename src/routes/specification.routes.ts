import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";

const specificationRoutes = Router()

const specificationRepository = new SpecificationRepository()

// @ts-ignore
specificationRoutes.post('/', (req, res) => {
  const { name, description } = req.body

  specificationRepository.create({ name, description })

  return res.status(201).send()
})

export { specificationRoutes };
