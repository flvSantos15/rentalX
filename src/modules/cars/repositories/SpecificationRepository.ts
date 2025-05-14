import { Specification } from "../models/Specification";
import { ISpecification, ISpecificationsRepository } from "./implementations/ISpecificationRepository";

export class SpecificationRepository implements ISpecificationsRepository {
  private specifications: ISpecification[]

  private static instance: SpecificationRepository

  constructor() {
    this.specifications = []
  }

  public static getInstance(): SpecificationRepository {
    if (!SpecificationRepository.instance) {
      SpecificationRepository.instance = new SpecificationRepository()
    }

    return SpecificationRepository.instance
  }
  
  create({ name, description }: ISpecification): void {
    const specification = new Specification()

    Object.assign(specification, {
      name,
      description,
      created_at: new Date()
    })

    this.specifications.push(specification)
  }

  findByName(name: string): ISpecification {
    const specification = this.specifications.find(specification => specification.name === name)

    return specification
  }
}
