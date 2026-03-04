import { Student } from "./Student";
import { Major } from "./Major";
import { sequelizeConnection } from "../config/db";

Major.hasMany(Students, {foreignKey: 'majorId', as: 'students'});
Student.belongsTo(Major, {foreignKey: 'majorId', as: 'major'});

export{Major, Student, sequelizeConnection};