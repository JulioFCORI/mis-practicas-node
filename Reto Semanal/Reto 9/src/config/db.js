import mysql from "mysql2/promise";

//Creta connection to database
const connection = mysql.createPool({
    host: 'local',
    user: 'root',
    password: 'Remsita1807@',
    database: 'biblioteca'
})

export default connection;