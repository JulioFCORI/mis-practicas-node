import User from "../models/Author.js";
export const getAuthors = async (req, res) => {
  try {
    const [row] = await User.getAll();
    res.json(row);
  } catch (err) {
    console.error(err);
    res.status(404).json({ error: {err} });
  }
};

export const getAuthorById = async (req, res) => {
  try {
    const { id } = req.params;
    const [row] = await User.getById(id);
    res.json(row);
  } catch (err) {
    console.error(err);
    res.status(404).json({ error: err });
  }
};
