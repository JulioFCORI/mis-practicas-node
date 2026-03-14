import  {DataTypes, DateTypes} from "sequelize";
import sequilize from "../conf/dbConfig.js"


const Major = sequilize.define('Major',{
    majorId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    /*modifyBy:{
        type: DataTypes.INTEGER,
    };*/
}, {
    timestamps: true,
},
)
export default Major;