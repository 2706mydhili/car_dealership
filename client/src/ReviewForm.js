import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ dealerId }) => {
  const [review, setReview] = useState('');
  const [sentiment, setSentiment] = useState('Positive');
  const [purchaseDate, setPurchaseDate] = useState('');
  const [carMake, setCarMake] = useState('');
  const [yearOfManufacture, setYearOfManufacture] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newReview = {
      review,
      sentiment,
      purchaseDate,
      carMake,
      yearOfManufacture,
    };

    try {
      await axios.post(`http://localhost:3001/api/reviews/${dealerId}`, newReview);
      // Clear form after submission
      setReview('');
      setSentiment('Positive');
      setPurchaseDate('');
      setCarMake('');
      setYearOfManufacture('');
      // Optionally, you can fetch the reviews again to update the list
    } catch (error) {
      console.error('Error posting review:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Review:</label>
        <textarea value={review} onChange={(e) => setReview(e.target.value)} required />
      </div>
      <div>
        <label>Sentiment:</label>
        <select value={sentiment} onChange={(e) => setSentiment(e.target.value)} required>
          <option value="Positive">Positive</option>
          <option value="Neutral">Neutral</option>
          <option value="Negative">Negative</option>
        </select>
      </div>
      <div>
        <label>Purchase Date:</label>
        <input type="date" value={purchaseDate} onChange={(e) => setPurchaseDate(e.target.value)} required />
      </div>
      <div>
        <label>Car Make:</label>
        <input type="text" value={carMake} onChange={(e) => setCarMake(e.target.value)} required />
      </div>
      <div>
        <label>Year of Manufacture:</label>
        <input type="number" value={yearOfManufacture} onChange={(e) => setYearOfManufacture(e.target.value)} required />
      </div>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
