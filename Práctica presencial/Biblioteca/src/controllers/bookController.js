import pool from "../config/db.js";

const getBooks = async (req, res) => {
  const getQuery = "SELECT libroId,nombre,autorId FROM libro;";
  try {
    const [rows] = await pool.query(getQuery);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: "Error consulting books" });
  }
};

const getBookById = async (req, res) => {
  const { id } = req.params;
  const getBookByIdQuery = "SELECT * FROM libro WHERE libroId = ?;";
  try {
    const [rows] = await pool.query(getBookByIdQuery, id);
    res.json(rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error consulting the book" });
  }
};

const insertBook = async (req, res) => {
  const { nombre, autorId } = req.body;
  const insertBookQuery = "INSERT INTO libro (nombre, autorId) VALUES(?,?,?)";

   try {
    const [result] = await pool.query(getBookByIdQuery, [nombre, autorId]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "libro no encontrado" });
    }
    res.status(201).json({message: "Libro actualizado", result:{libroid: result.insertId, nombre, autorId}});
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error updating the book" });
  }

};

const updateBook = async (req, res) => {
  const { id } = req.params;
  const { nombre, autorId } = req.body;
  const updateBookByIdQuery =
    "UPDATE libro SET nombre=?, autorId=? WHERE libroId = ?;";

  try {
    const [result] = await pool.query(getBookByIdQuery, [nombre, autorId, id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "libro no encontrado" });
    }
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error updating the book" });
  }
};

const deleteBook = async (req, res) => {
  const { id } = req.params;
  const getBookByIdQuery = "DELETE libro WHERE libroId = ?;";
  try {
    const [result] = await pool.query(getBookByIdQuery, id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "libro no encontrado" });
    }
    res.status(204).json({ message: "Libro eliminado" });

    res.json(rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error consulting the book" });
  }
};

export { getBooks, getBookById, insertBook, updateBook, deleteBook };
