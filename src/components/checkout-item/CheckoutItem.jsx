import React from 'react';

export const CheckoutItem = ({ cartItem }) => {
  console.log(cartItem);
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={cartItem.imageUrl} alt={cartItem.name} />
      </div>
      <span className='name'>{cartItem.name}</span>
      <span className='price'>{cartItem.price}</span>
      <span className='quantity'>{cartItem.quantity}</span>
    </div>
  );
};
