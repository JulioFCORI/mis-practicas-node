import connection from "../config/db.js"
const User = {
    async getAll(){
        const [row] = await connection.query("SELECT * FROM author");
    },
    async getById (id) {
        const [row] = await connection.query("SELECT * FROM author where id = ?",[id]);
    }
}

export default User;