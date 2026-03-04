import { DataTypes } from "sequelize";
import { sequelizeConnection } from "../config/db";

 export const Student = sequelizeConnection.define('Student',{
    StudentId:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    semestre: DataTypes.ENUM('1er', '2do', '3ro'),
    majorId: DataTypes.INTEGER 
})