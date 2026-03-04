import dotenv from "dotenv";
import { Sequelize } from "sequelize";
dotenv.config();
const USER = process.env.USER;
const NAME = process.env.DB_NAME;
const PASSWORD = process.env.PASSWORD

export const sequelizeConnection = new Sequelize(NAME, USER, PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});