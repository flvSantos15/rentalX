import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "rentx",
  synchronize: true,
  logging: true,
  // entities: [Category, Specification],
  entities: ["src/modules/cars/entities/*.ts"],
  migrations: [
    "src/database/migrations/*.ts"
  ]
})

