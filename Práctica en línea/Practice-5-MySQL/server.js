import express from "express";
import mysql from "mysql2/promise";

//Create server with express
const app = express();
app.use(express.json());

//Create conection to Database
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Remsita1807@',
    database: 'library'
});

async function test() {
    const [result] = await connection.query('SELECT 1+1 AS result');
    console.log('Conection established',result[0].result);
}

app.get("/books", async (req, res) => {
    try{
        const [result] = await connection.query("SELECT * FROM BOOKS")
        res.status(201).json({result});
    }catch(err){
        res.status(500).json({error: "Error at trying to get books" });

    }
})

app.post("/books", async (req, res) => {
    try{
         const [result] = await connection.query("INSERT INTO BOOKS (book,author) VALUES(?,?)",[req.body.title,req.body.author]);
    res.status(201).json({id: result.insertId, ...req.body});
    }catch(err){
        res.status(400).json({error: err.message});
    }
})

app.put("/books/:id", async (req, res) => {
    try{
        const [result] = await connection.query("UPDATE BOOKS SET book=?, author=? WHERE id=?",[req.body.title,req.body.author,req.params.id]);
        res.status(200).json({id: req.params.id, ...req.body});
    }catch(err){
        res.status(500).json({error: "Error at trying to update book"});
    }
});

app.delete("/books/:id", async (req, res) =>{
    try{
        const [result] = await connection.query("DELETE FROM BOOKS WHERE id=?",[req.params.id]);
        res.status(201).json({message: `Erased the book with ID ${req.params.id}` })
    }catch(err){
        res.status(500).json({error: "Error at trying to delete books"});

    }
})




const PORT = 3000;

app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`);
})

test();
