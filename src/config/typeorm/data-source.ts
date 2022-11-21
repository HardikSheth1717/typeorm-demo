import { join } from "path";
import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Admin@123",
    database: "hardik",
    synchronize: false,
    logging: false,
    subscribers: [],
    entities: [
		join('src', '**', 'entities', '*.entity.{ts,js}')
	],
	migrations: [
		join('src', 'database', 'migrations', '*{.ts,.js}')
	]
});