import { DataTypes } from "sequelize";
import sequelizeConnection from "../config/db.js";

const Book = sequelizeConnection.define(
  "Book",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    authorId: { type: DataTypes.INTEGER, allowNull: true },
  },

  { tableName: "book", timestamps: false },
);
export default Book;
