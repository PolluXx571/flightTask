import React from 'react';
import TransferLabels from './TransferLabels';

const Transfer = ({ onTransferChange }) => {
  return (
    <div className='transfer'>
      <label className='transfer__label'>Количество пересадок</label>
      <div className='transfer__labels-container'>
        <TransferLabels transfers='Все' onTransferChange={onTransferChange} />
        <TransferLabels transfers='Без пересадок' onTransferChange={onTransferChange} />
        <TransferLabels transfers='1 пересадка' onTransferChange={onTransferChange} />
        <TransferLabels transfers='2 пересадка' onTransferChange={onTransferChange} />
        <TransferLabels transfers='3 пересадка' onTransferChange={onTransferChange} />
      </div>
    </div>
  );
};

export default Transfer;
