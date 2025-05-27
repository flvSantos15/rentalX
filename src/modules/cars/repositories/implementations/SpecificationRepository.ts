import { Specification } from "@modules/cars/entities/Specification";
import {
  ISpecification,
  ISpecificationsRepository,
} from "@modules/cars/repositories/ISpecificationRepository";
import { Repository, getRepository } from "typeorm";

export class SpecificationRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({ name, description }: ISpecification): Promise<void> {
    const specification = this.repository.create({
      name,
      description,
      created_at: new Date(),
    });

    await this.repository.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    const specification = this.repository.findOne({ where: { name } });

    return specification;
  }
}
