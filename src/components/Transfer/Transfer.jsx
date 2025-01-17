import React, { useState } from 'react';
import TransferLabels from './TransferLabels';

const Transfer = ({ onTransferChange }) => {
  const [selected, setSelected] = useState('Все');

  const handleTransferChange = (type) => {
    setSelected(type);
    onTransferChange(type);
  };

  return (
    <div className='transfer'>
      <label className='transfer__label'>Количество пересадок</label>
      <div className='transfer__labels-container'>
        {['Все', 'Без пересадок', '1 пересадка', '2 пересадка', '3 пересадка'].map(type => (
          <TransferLabels
            key={type}
            transfers={type}
            selected={selected}
            onTransferChange={handleTransferChange}
          />
        ))}
      </div>
    </div>
  );
};

export default Transfer;
