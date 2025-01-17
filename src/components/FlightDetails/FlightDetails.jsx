import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const FlightDetails = ({ data }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [flight, setFlight] = useState(null);
  const [contactDetails, setContactDetails] = useState({
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    try {
      const foundFlight = data.find(item => item.id === parseInt(id));
      if (!foundFlight) {
        setError('Flight not found');
      }
      setFlight(foundFlight);
    } catch (err) {
      setError('Error loading flight details');
    } finally {
      setLoading(false);
    }
  }, [id, data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!flight) return <p>Flight not found</p>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
  };

  return (
    <div className='flight-details'>
      <button onClick={() => navigate('/')} className="back-button">
        ← Back to Flights
      </button>
      
      <div className="flight-details__header">
        <h2>Flight Details</h2>
        <p className="flight-price">{flight.price} P</p>
      </div>

      <div className="flight-info-grid">
        <div className="info-section">
          <h3>Flight Information</h3>
          <p><strong>Flight Number:</strong> {flight.flight_number}</p>
          <p><strong>Airline:</strong> {flight.airline}</p>
          <p><strong>Class:</strong> {flight.class}</p>
          <p><strong>Baggage:</strong> {flight.baggage}</p>
        </div>

        <div className="info-section">
          <h3>Schedule</h3>
          <p><strong>Date:</strong> {flight.flight_date}</p>
          <p><strong>Departure:</strong> {flight.departure_airport_code} at {flight.departure_time}</p>
          <p><strong>Arrival:</strong> {flight.arrival_airport_code} at {flight.arrival_time}</p>
          <p><strong>Duration:</strong> {flight.duration}</p>
        </div>

        <div className="info-section">
          <h3>Transfers</h3>
          <p><strong>Number of Stops:</strong> {flight.number_of_stops}</p>
          <p><strong>Layover Airports:</strong> {flight.layover_airports.join(', ') || 'Direct Flight'}</p>
          <p><strong>Country:</strong> {flight.country}</p>
        </div>
      </div>

      <div className="booking-section">
        <h3>Book this flight</h3>
        {bookingSuccess ? (
          <div className="success-message">
            <p>✓ Booking successful! We will contact you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="booking-form">
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={contactDetails.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={contactDetails.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                value={contactDetails.phone}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Book Now</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FlightDetails;