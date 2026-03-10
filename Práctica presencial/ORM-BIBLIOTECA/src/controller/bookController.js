import Book from "../models/Book.js";
import Author from "../models/Author.js";
import Review from "../models/Review.js";
import Loan from "../models/Loan.js";

export const getBooks = async (req, res) => {
  const books = await Book.findAll(
    {
      include:[{
        model:Author,
        as:"author"
      },
      {
      model:Review,
      as: "reviews"
      },
    {
      model:Loan,
      as: "loans"
    }]
    }
  );
  res.json(books);
};

export const getBookById = async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  if (!book) return res.status(404).json({ error: "Book not found" });
  res.json(book);
};

export const createBook = async (req, res) => {
  const { name, authorId } = req.body;
  if (!name)
    return res.status(400).json({ error: "The name of the book is required" });
  const book = await Book.create({ name, authorId });
  res.status(201).json({ message: "Book created", book });
};

export const updateBook = async (req, res) => {
  const { name, authorId } = req.body;
  const book = await Book.findByPk(req.params.id);
  if (!book) return res.status(404).json({ error: "Book not found" });
  book.name = name || book.name;
  book.authorId = authorId || book.authorId;
  await book.save();
  res.json({message: "Update book", book});

};

export const deleteBook = async (res, req) => {
    const { name, authorId } = req.body;
  const book = await Book.findByPk(req.params.id);
  if (!book) return res.status(404).json({ error: "Book not found" });
  await book.destroy();
  res.json({message: "Delete book"});
}
