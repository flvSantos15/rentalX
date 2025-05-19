export interface ISpecification {
  name: string
  description: string
}

export interface ISpecificationsRepository {
  findByName(name: string): Promise<ISpecification>
  create({ name, description }: ISpecification): Promise<void>
}
