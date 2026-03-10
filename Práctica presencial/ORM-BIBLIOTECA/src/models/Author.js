import { DataTypes } from "sequelize";
import sequelizeConnection from "../config/db.js";

const Author = sequelizeConnection.define(
    "Author",
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false }
    },
    {tableName: "author", timestamps: false},
)
export default Author;