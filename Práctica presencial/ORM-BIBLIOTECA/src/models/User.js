import { DataTypes } from "sequelize";
import sequelizeConnection from "../config/db.js";
const User = sequelizeConnection.define("User", 
    {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false},
  age: {type: DataTypes.INTEGER, allowNull: true},
  adress: {type: DataTypes.STRING, allowNull: true}
    },
    {tableName: "user", timestamps: false},
);

export default User;
