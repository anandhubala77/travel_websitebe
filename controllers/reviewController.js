const Review = require('../models/Review');

// @desc    Get all reviews
// @route   GET /api/reviews
exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// @desc    Create a review
// @route   POST /api/reviews
exports.createReview = async (req, res) => {
  try {
    const { name, rating, message } = req.body;

    if (!name || !rating || !message) {
      return res.status(400).json({ message: "Please provide all fields" });
    }

    const review = await Review.create({
      name,
      rating,
      message
    });

    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};