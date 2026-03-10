import { Sequelize } from "sequelize";

const sequelizeConnection = new Sequelize("biblioteca","Julio","MiPassword123",
    {
        host: "localhost",
        dialect: "mysql"
    }
);

export default sequelizeConnection;