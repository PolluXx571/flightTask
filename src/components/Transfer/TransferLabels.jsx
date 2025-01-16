import React from 'react';

const TransferLabels = ({ transfers, onTransferChange }) => {
  return (
    <div className='transferlabel-label'>
      <input
        type='radio'
        name='transfer'
        onChange={() => onTransferChange(transfers)}
      />
      <p className='transferlabel-label__paragraph'>{transfers}</p>
    </div>
  );
};

export default TransferLabels;
