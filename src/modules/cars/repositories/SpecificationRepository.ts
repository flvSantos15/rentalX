import { Specification } from "../models/Specification";
import { ISpecification, ISpecificationsRepository } from "./ISpecificationRepository";

export class SpecificationRepository implements ISpecificationsRepository {
  private specifications: ISpecification[]
  
  constructor() {
    this.specifications = []
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
