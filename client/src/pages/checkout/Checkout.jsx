import React from 'react';
import { connect } from 'react-redux';

import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import './checkout.scss';
import {
  selectCartItems,
  selectCartItemsTotal
} from '../../redux/cart/cartSelector';
import { createStructuredSelector } from 'reselect';
import { StripeButton } from '../../components/stripe-button/StripeButton';

const Checkout = ({ cartItems, total }) => {
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
      {total ? <StripeButton price={total} /> : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal
});

export default connect(mapStateToProps, null)(Checkout);
