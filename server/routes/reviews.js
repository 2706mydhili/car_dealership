const express = require('express');
const Review = require('../models/Review');
const router = express.Router();

// Submit a review
router.post('/', async (req, res) => {
  const newReview = new Review(req.body);
  try {
    await newReview.save();
    res.status(201).send('Review submitted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Get reviews by dealership ID
router.get('/:dealerId', async (req, res) => {
  const { dealerId } = req.params;
  try {
    const reviews = await Review.find({ dealerId });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
