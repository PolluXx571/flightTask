import React from 'react';

const PriceRangeSelector = ({ price, onPriceChange }) => {
  const handleSliderChange = (event) => {
    onPriceChange(Number(event.target.value));
  };

  return (
    <div className='price-range-selector'>
      <h2 className='price-range-selector__title'>Select Flight Price Range</h2>
      <div className='price-range-selector__slider-container'>
        <label htmlFor='priceRange' className='price-range-selector__label'>
          Price Range:
        </label>
        <input
          type='range'
          id='priceRange'
          className='price-range-selector__slider'
          min='0'
          max='10000'
          step='10'
          value={price}
          onChange={handleSliderChange}
        />
        <div className='price-range-selector__price-range'>
          <span className='price-range-selector__price-label'>0 P</span>
          <span className='price-range-selector__selected-value'>{price} P</span>
          <span className='price-range-selector__price-label'>10000 P</span>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSelector;
