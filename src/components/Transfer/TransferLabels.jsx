import React from 'react';

const TransferLabels = ({ transfers, onTransferChange, selected }) => {
  return (
    <div className='transferlabel-label'>
      <input
        type='radio'
        name='transfer'
        checked={selected === transfers}
        onChange={() => onTransferChange(transfers)}
      />
      <p className='transferlabel-label__paragraph'>{transfers}</p>
    </div>
  );
};

export default TransferLabels;
