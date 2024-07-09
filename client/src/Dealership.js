import React from 'react';
import { useParams } from 'react-router-dom';
import './Dealership.css';
const Dealership = () => {
    const { id } = useParams();
    const dealerships = [
        { id: 1, dealerName: 'Auto World', city: 'Los Angeles', address: '1234 Sunset Blvd', zip: '90001', state: 'California' },
        { id: 2, dealerName: 'Car Nation', city: 'San Francisco', address: '5678 Market St', zip: '94103', state: 'California' },
        { id: 3, dealerName: 'DriveTime', city: 'San Diego', address: '9101 Ocean Dr', zip: '92101', state: 'California' },
        { id: 4, dealerName: 'Luxury Motors', city: 'Sacramento', address: '1213 Capitol Ave', zip: '95814', state: 'California' },
        { id: 5, dealerName: 'Prestige Auto', city: 'Fresno', address: '1415 Main St', zip: '93722', state: 'California' },
        { id: 6, dealerName: 'Big Apple Cars', city: 'New York', address: '1617 Broadway', zip: '10001', state: 'New York' },
        { id: 7, dealerName: 'Empire State Autos', city: 'Buffalo', address: '1819 Elmwood Ave', zip: '14201', state: 'New York' },
        { id: 8, dealerName: 'Metro Motors', city: 'Rochester', address: '2021 University Ave', zip: '14607', state: 'New York' },
        { id: 9, dealerName: 'Premier Auto', city: 'Albany', address: '2223 State St', zip: '12203', state: 'New York' },
        { id: 10, dealerName: 'Upstate Cars', city: 'Syracuse', address: '2425 Onondaga Blvd', zip: '13215', state: 'New York' },
        { id: 11, dealerName: 'Lone Star Autos', city: 'Houston', address: '2627 Westheimer Rd', zip: '77002', state: 'Texas' },
        { id: 12, dealerName: 'Texas Prime', city: 'Dallas', address: '2829 Commerce St', zip: '75201', state: 'Texas' },
        { id: 13, dealerName: 'Cowboy Cars', city: 'Austin', address: '3031 Guadalupe St', zip: '78705', state: 'Texas' },
        { id: 14, dealerName: 'Rodeo Drive', city: 'San Antonio', address: '3233 Broadway', zip: '78209', state: 'Texas' },
        { id: 15, dealerName: 'Alamo Autos', city: 'El Paso', address: '3435 Mesa St', zip: '79902', state: 'Texas' },
      ];
      const reviews = {
        1: [{ user: 'John Doe', sentiment: 'Positive', review: 'Great service and friendly staff!' }, { user: 'Jane Smith', sentiment: 'Neutral', review: 'Good selection of cars, but a bit pricey.' }],
        2: [{ user: 'Sam Johnson', sentiment: 'Negative', review: 'Had to wait too long for service.' }, { user: 'Emily Davis', sentiment: 'Positive', review: 'Found the perfect car, thanks to the helpful staff.' }],
        3: [{ user: 'Michael Brown', sentiment: 'Positive', review: 'Best car buying experience I’ve had.' }, { user: 'Sarah Wilson', sentiment: 'Negative', review: 'Not happy with the financing options.' }],
        4: [{ user: 'Chris Evans', sentiment: 'Positive', review: 'Fantastic dealership with a great selection.' }, { user: 'Patricia Brown', sentiment: 'Neutral', review: 'Staff was okay, but the showroom was too crowded.' }],
        5: [{ user: 'David Clark', sentiment: 'Positive', review: 'Excellent customer service.' }, { user: 'Jennifer Thomas', sentiment: 'Negative', review: 'Car had issues after purchase.' }],
      };
      const dealership = dealerships.find(d => d.id === parseInt(id));
      if(!dealership){
        return <div>Dealership not found</div>;
      }
      const dealershipReviews = reviews[id] || [];
    
      return (
        <div className="dealership-container">
          <h2>{dealership.dealerName}</h2>
          <p>{dealership.address}, {dealership.city}, {dealership.state} {dealership.zip}</p>
          <h3>Reviews</h3>
          <ul>
            {dealershipReviews.map((review, index) => (
              <li key={index} className={`review ${review.sentiment.toLowerCase()}`}>
                <p><strong>{review.user}</strong>: {review.review} <span>({review.sentiment})</span></p>
              </li>
            ))}
          </ul>
        </div>
      );
};
export default Dealership;