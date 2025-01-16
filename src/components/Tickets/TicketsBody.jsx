import React from 'react';
import TicketsList from './TicketsList';

const TicketsBody = ({ data }) => {
      return (
            <div className='flight-info'>
                  {data.length > 0 ? (
                        data.map((item) => <TicketsList key={item.id} item={item} />)
                  ) : (
                        <p>No tickets available with the selected filters.</p>
                  )}
            </div>
      );
};

export default TicketsBody;
