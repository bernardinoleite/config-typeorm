import { join } from "path";
import { DataSource } from "typeorm";


export const appDataSource = new DataSource({
    type: "postgres",
    username: "exemple_user",
    port: 5432,
    host: "exemple_localhost",
    password: "exemple_password",
    database: "exemple_DB",
    migrations: ["/migrations/*.ts"],

    entities: [
        join(__dirname, "/entities/exemple_Category.ts"),
        join(__dirname, "/entities/exemple_Specification.ts"),
        join(__dirname, "/entities/exemple_User.ts")
    ],
    synchronize: true
})


appDataSource
    .initialize()
    .then(() => {
        console.log("Data Source initialized");
    })
    .catch((e) => {
        console.error(e.message)
    });
