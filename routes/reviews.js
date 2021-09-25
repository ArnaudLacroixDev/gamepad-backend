const express = require("express");
const router = express.Router();

const Review = require("../models/Review");

router.post("/:id/review", async (req, res) => {
  try {
    const newReview = new Review({
      game: req.params.id,
      title: req.fields.title,
      text: req.fields.text,
    });

    await newReview.save();
    res.status(200).json("Comment added !");
  } catch (error) {
    console.log(error.response);
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
