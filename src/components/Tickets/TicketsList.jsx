import React from 'react';
import Logo from '../../assets/s7-airlines-social-preview.png';

const TicketsList = ({ item }) => {
  return (
    <div className='ticket'>
      <div className='ticket__header'>
        <p className='ticket__price'>{item.price} P</p>
        <img src={Logo} alt='Airline Logo' className='ticket__logo' />
      </div>

      <div className='ticket__details'>
        <div className='ticket__route'>
          <p className='ticket__route-info'>
            {item.departure_airport_code}-{item.arrival_airport_code}
          </p>
          <time className='ticket__time'>
            {item.departure_time} - {item.arrival_time}
          </time>
        </div>

        <div className='ticket__status'>
          <p className='ticket__status-info'>В ПУТИ</p>
          <time className='ticket__duration'>{item.duration}</time>
        </div>

        <div className='ticket__transfers'>
          <p className='ticket__transfers-info'>{item.number_of_stops} ПЕРЕСАДКИ</p>
          <time className='ticket__non-stop'>{item.layover_airports.join(', ')}</time>
        </div>
      </div>
    </div>
  );
};

export default TicketsList;
