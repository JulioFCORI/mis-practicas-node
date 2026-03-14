import connection from "../config/db.js"
const User = {
    async getAll(){
        const [row] = await db.query("SELECT * FROM user");
    },
    async getById (id) {
        const [row] = await db.query("SELECT * FROM user where id = ?",[id]);
    }
}

export default User;