import User from "../models/User.js";
import Book from "../models/Book.js"
import Review from "../models/Review.js";

export const getReviews = async (req, res) => {
  const reviews = await Review.findAll({
    include:[{
      model:User,
      as: "user"
    },
    {
      model: Book,
      as: "book"
    }]
  });
  res.json(reviews);
};

export const getReviewById = async (req, res) => {
  const review = await Review.findByPk(req.params.id);
  if (!review) return res.status(404).json({ error: "Review not found" });
  res.json(review);
};

export const createReview = async (req, res) => {
  const { name, authorId } = req.body;
  if (!name)
    return res.status(400).json({ error: "The name of the review is required" });
  const review = await Review.create({ name, authorId });
  res.status(201).json({ message: "Review created", review });
};

export const updateReview = async (req, res) => {
  const { name, authorId } = req.body;
  const review = await Review.findByPk(req.params.id);
  if (!review) return res.status(404).json({ error: "Review not found" });
  review.name = name || review.name;
  review.authorId = authorId || review.authorId;
  await review.save();
  res.json({message: "Update review", review});

};

export const deleteReview = async (res, req) => {
    const { name, authorId } = req.body;
  const review = await Review.findByPk(req.params.id);
  if (!review) return res.status(404).json({ error: "Review not found" });
  await review.destroy();
  res.json({message: "Delete review"});
}
