import sequelizeConnection from "../config/db.js";
import Author from "./Author.js";
import Book from "./Book.js";
import Review from "./Review.js";
import User from "./User.js";
import Loan from "./Loan.js";

Author.hasMany(Book,{
    foreignKey: "authorId",
    as: "book"
});

Book.belongsTo(Author,{
    foreignKey: "authorId",
    as: "author"
});

Review.hasMany(Review, {
    foreignKey: "userId",
    as: "reviews"
})
Review.belongsTo(User, {
  foreignKey: "userId",
  as: "user", // Alias: review.user → obtienes quién escribió la reseña
});
User.hasMany(Loan, {
  foreignKey: "userId", // Columna en Loan que referencia al User
  as: "loans", // Alias: user.loans → obtienes sus préstamos
});
Loan.belongsTo(User, {
  foreignKey: "userId",
  as: "user", // Alias: loan.user → obtienes quién pidió el préstamo
});
Book.hasMany(Review, {
  foreignKey: "bookId", // Columna en Review que referencia al Book
  as: "reviews", // Alias: book.reviews → obtienes las reseñas del libro
});
Review.belongsTo(Book, {
  foreignKey: "bookId",
  as: "book", // Alias: review.book → obtienes de qué libro es la reseña
});

Book.hasMany(Loan, {
  foreignKey: "bookId", // Columna en Loan que referencia al Book
  as: "loans", // Alias: book.loans → obtienes los préstamos del libro
});
Loan.belongsTo(Book, {
  foreignKey: "bookId",
  as: "book", // Alias: loan.book → obtienes qué libro se prestó
});

export { sequelizeConnection, Author, Book, User, Review, Loan}