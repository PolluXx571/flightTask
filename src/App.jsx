import { useState, useEffect } from 'react';
import Transfer from './components/Transfer/Transfer';
import TicketsBody from './components/Tickets/TicketsBody';
import PriceRangeSelector from './components/TicketsPrice/PriceRangeSelector';

function App({ data }) {
      const [price, setPrice] = useState(500);
      const [transferType, setTransferType] = useState('Все');
      const [searchQuery, setSearchQuery] = useState('');
      const [filteredData, setFilteredData] = useState([]);

      useEffect(() => {
            setFilteredData(filterData());
      }, [price, transferType, searchQuery]);

      const handlePriceChange = (newPrice) => {
            setPrice(newPrice);
      };

      const handleTransferTypeChange = (newType) => {
            setTransferType(newType);
      };

      const handleSearchChange = (event) => {
            setSearchQuery(event.target.value);
      };

      const filterData = () => {
            return data.filter((item) => {
                  const isPriceInRange = item.price <= price;
                  const isTransferTypeValid =
                        transferType === 'Все' ||
                        (transferType === 'Без пересадок' && item.number_of_stops === 0) ||
                        (transferType === '1 пересадка' && item.number_of_stops === 1) ||
                        (transferType === '2 пересадка' && item.number_of_stops === 2) ||
                        (transferType === '3 пересадка' && item.number_of_stops === 3);
                  const isSearchQueryValid =
                        item.flight_number.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.country.toLowerCase().includes(searchQuery.toLowerCase());

                  return isPriceInRange && isTransferTypeValid && isSearchQueryValid;
            });
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
                              placeholder='Search by flight  country'
                              value={searchQuery}
                              onChange={handleSearchChange}
                              className='search-input'
                        />
                        <TicketsBody data={filteredData} />
                  </div>
            </div>
      );
}

export default App;
