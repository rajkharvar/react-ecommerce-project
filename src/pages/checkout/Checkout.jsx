import React from 'react';
import { connect } from 'react-redux';

import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import './checkout.scss';

const Checkout = ({ cartItems }) => {
  let total = 0;
  cartItems.map(cartItem => {
    total += cartItem.quantity * cartItem.price;
  });
  return (
    <div className='checkout'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>TOTAL: ${total}</div>
    </div>
  );
};

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.cartItems
});

export default connect(mapStateToProps, null)(Checkout);
