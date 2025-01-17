import React from 'react';
import { useNavigate } from 'react-router-dom';
import TicketsList from './TicketsList';

const TicketsBody = ({ data }) => {
  const navigate = useNavigate();

  const handleBooking = (id) => {
    navigate(`/flight/${id}`);
  };

  return (
    <div className='flight-info'>
      {data.length > 0 ? (
        data.map((item) => (
          <TicketsList 
            key={item.id} 
            item={item} 
            onBooking={handleBooking}
          />
        ))
      ) : (
        <p>No tickets available with the selected filters.</p>
      )}
    </div>
  );
};

export default TicketsBody;