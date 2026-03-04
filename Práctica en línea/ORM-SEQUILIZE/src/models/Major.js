import { DataTypes } from "sequelize";
import { sequelizeConnection } from "../config/db";

export const Major = sequelizeConnection.define('Major',{
    majorID:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING
}, {timestamps:false})