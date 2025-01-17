import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import Transfer from './components/Transfer/Transfer';
import TicketsBody from './components/Tickets/TicketsBody';
import PriceRangeSelector from './components/TicketsPrice/PriceRangeSelector';
import FlightDetails from './components/FlightDetails/FlightDetails';

function App({ data }) {
  const [price, setPrice] = useState(500);
  const [transferType, setTransferType] = useState('Все');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const filterData = useCallback(() => {
    const searchTerm = searchQuery.toLowerCase().trim();
    
    const searchResults = data.filter((item) => (
      item.flight_number.toLowerCase().includes(searchTerm) ||
      item.country.toLowerCase().includes(searchTerm) ||
      item.airline.toLowerCase().includes(searchTerm) ||
      item.departure_airport_code.toLowerCase().includes(searchTerm) ||
      item.arrival_airport_code.toLowerCase().includes(searchTerm)
    ));

    return searchResults.filter((item) => {
      const isPriceInRange = price === 0 || item.price <= price;
      const isTransferTypeValid =
        transferType === 'Все' ||
        (transferType === 'Без пересадок' && item.number_of_stops === 0) ||
        (transferType === '1 пересадка' && item.number_of_stops === 1) ||
        (transferType === '2 пересадка' && item.number_of_stops === 2) ||
        (transferType === '3 пересадка' && item.number_of_stops === 3);

      return isPriceInRange && isTransferTypeValid;
    });
  }, [data, price, transferType, searchQuery]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setFilteredData(filterData());
    }
  }, [data, filterData]);

  const handlePriceChange = (newPrice) => {
    setPrice(newPrice);
  };

  const handleTransferTypeChange = (newType) => {
    setTransferType(newType);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleBooking = (id) => {
    navigate(`/flight/${id}`);
  };

  return (
    <div className='layout'>
      <div className='layout__left'>
        <Transfer onTransferChange={handleTransferTypeChange} />
        <PriceRangeSelector price={price} onPriceChange={handlePriceChange} />
      </div>
      <div className='layout__right'>
        <input
          type='text'
          placeholder='Search by city, country, airline or airport'
          value={searchQuery}
          onChange={handleSearchChange}
          className='search-input'
        />
        <Routes>
          <Route path='/' element={<TicketsBody data={filteredData} onBooking={handleBooking} />} />
          <Route path='/flight/:id' element={<FlightDetails data={data} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
