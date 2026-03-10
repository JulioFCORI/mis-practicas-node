import Loan  from "../models/Loan.js";
import Review from "../models/Review.js";
import Book from "../models/Book.js";
import User from "../models/User.js";

export const getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

export const getUserById = async (req, res) => {
  const user = await User.findByPk(req.params.id, {
    include: [
      {
        model: Review,
        as: "reviews",
        include: {
          model: Book,
          as: "book",
        },
      },
      {
        model: Loan,
        as: "loans",
      },
    ],
  });
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
};

export const createUser = async (req, res) => {
  const { name, authorId } = req.body;
  if (!name)
    return res.status(400).json({ error: "The name of the user is required" });
  const user = await User.create({ name, authorId });
  res.status(201).json({ message: "User created", user });
};

export const updateUser = async (req, res) => {
  const { name, authorId } = req.body;
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  user.name = name || user.name;
  user.authorId = authorId || user.authorId;
  await user.save();
  res.json({ message: "Update user", user });
};

export const deleteUser = async (res, req) => {
  const { name, authorId } = req.body;
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  await user.destroy();
  res.json({ message: "Delete user" });
};
