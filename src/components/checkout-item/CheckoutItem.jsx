import React from 'react';
import { connect } from 'react-redux';

import './checkout-item.scss';
import { clearItemFromCart } from '../../redux/cart/cartAction';

const CheckoutItem = ({ cartItem, clearItemFromCart }) => {
  const { imageUrl, price, name, quantity } = cartItem;
  console.log(clearItemFromCart);
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
      <span className='quantity'>{quantity}</span>
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
  clearItemFromCart: item => dispatch(clearItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
