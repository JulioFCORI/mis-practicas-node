import { DataTypes } from "sequelize";
import sequelize from "../conf/dbConfig";

const Event = sequelize.define('Event',{
    eventId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    name: {type:DataTypes.STRING,
        allowNull:false
    },
    description:{type:DataTypes.STRING,
        allowNull:false
    },
    type: {
        type: DataTypes.ENUM("conference","course","cultural")
    },
    createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
{
    timestamps: true,
    tableName: 'Event',
})

export default Event;