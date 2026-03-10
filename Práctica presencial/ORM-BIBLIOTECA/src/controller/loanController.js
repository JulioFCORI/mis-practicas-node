import Book from "../models/Book.js";
import User from "../models/User.js";
import Loan from "../models/Loan.js";

export const getLoans = async (req, res) => {
  const loans = await Loan.findAll();
  res.json(loans);
};

export const getLoanById = async (req, res) => {
  const loan = await Loan.findByPk(req.params.id, {
    include: [
      {
        model: User,
        as: "user",
      },
      {
        model: Book,
        as: "book",
      },
    ],
  });
  if (!loan) return res.status(404).json({ error: "Loan not found" });
  res.json(loan);
};

export const createLoan = async (req, res) => {
  const { name, authorId } = req.body;
  if (!name)
    return res.status(400).json({ error: "The name of the loan is required" });
  const loan = await Loan.create({ name, authorId });
  res.status(201).json({ message: "Loan created", loan });
};

export const updateLoan = async (req, res) => {
  const { name, authorId } = req.body;
  const loan = await Loan.findByPk(req.params.id);
  if (!loan) return res.status(404).json({ error: "Loan not found" });
  loan.name = name || loan.name;
  loan.authorId = authorId || loan.authorId;
  await loan.save();
  res.json({ message: "Update loan", loan });
};

export const deleteLoan = async (res, req) => {
  const { name, authorId } = req.body;
  const loan = await Loan.findByPk(req.params.id);
  if (!loan) return res.status(404).json({ error: "Loan not found" });
  await loan.destroy();
  res.json({ message: "Delete loan" });
};
