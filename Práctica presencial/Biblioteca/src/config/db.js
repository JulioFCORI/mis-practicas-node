import mysql from "mysql2/promise";
const pool = mysql.createPool({
    host:"localhost",
    user:"Julio",
    password: "MiPassword123",
    database: "biblioteca"
});

export default pool;