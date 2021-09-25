const mongoose = require("mongoose");

const Review = mongoose.model("Review", {
  game: Number,
  title: String,
  text: String,
});

module.exports = Review;
