export interface ISpecification {
  name: string
  description: string
}

export interface ISpecificationsRepository {
  findByName(name: string): ISpecification
  create({ name, description }: ISpecification): void
}
