const express = require("express");
const axios = require("axios");
const router = express.Router();

const Review = require("../models/Review");

router.get("/games/:id", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games/${req.params.id}?key=${process.env.API_KEY}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/games/reviews/:id", async (req, res) => {
  try {
    const reviews = await Review.find({ game: req.params.id });

    res.status(200).json(reviews);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
