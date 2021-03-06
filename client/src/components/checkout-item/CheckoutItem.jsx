import React from 'react';
import { connect } from 'react-redux';

import './checkout-item.scss';
import {
  clearItemFromCart,
  addToCart,
  removeItemFromCart
} from '../../redux/cart/cartAction';

const CheckoutItem = ({
  cartItem,
  clearItemFromCart,
  addToCart,
  removeItemFromCart
}) => {
  const { imageUrl, price, name, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItemFromCart(cartItem)}>
          &#10094;
        </div>
        {quantity}
        <div
          className='arrow'
          onClick={() => {
            addToCart(cartItem);
          }}
        >
          &#10095;
        </div>
      </span>
      <div
        className='remove-button'
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItemFromCart: item => dispatch(clearItemFromCart(item)),
  addToCart: item => dispatch(addToCart(item)),
  removeItemFromCart: item => dispatch(removeItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
