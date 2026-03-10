import { DataTypes } from "sequelize";
import sequelizeConnection from "../config/db.js";

const Loan = sequelizeConnection.define("Loan", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  userId: {type: DataTypes.INTEGER, allownull: false},
  bookId: {type: DataTypes.INTEGER, allownull: false},
  orderDate: {type: DataTypes.DATE, allownull: false},
  deliveryDate: {type: DataTypes.DATE, allownull: false}
});

export default Loan
