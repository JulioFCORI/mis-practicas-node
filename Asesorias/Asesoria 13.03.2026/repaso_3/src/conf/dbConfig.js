import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    'andromeda',
    'root',
    'your_password_here',
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: false,
    }
);

export const connectDB = async () => {
    await sequelize.authenticate();
    console.log('Conexion a MySQL con Sequelize establecida');
};

export default sequelize;