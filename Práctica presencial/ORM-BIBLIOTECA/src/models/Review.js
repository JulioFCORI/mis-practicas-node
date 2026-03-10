import { DataTypes } from "sequelize";
import sequelizeConnection from "../config/db.js";

const Review = sequelizeConnection.define("Review", 
    {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  userId: {type: DataTypes.INTEGER, allowNull: false},
  bookId: {type: DataTypes.INTEGER, allowNull: false},
  comment: {type: DataTypes.STRING, allowNull: false}
},
{tableName: "review", timestamps: false}
);

export default Review
