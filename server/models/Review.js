const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  dealerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Dealer', required: true },
  user: { type: String, required: true },
  sentiment: { type: String, required: true },
  review: { type: String, required: true },
  purchaseDate: { type: Date, required: true },
  carMake: { type: String, required: true },
  year: { type: Number, required: true },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
