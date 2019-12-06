import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './cart-dropdown.scss';
import { CustomButton } from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';
import { toggleHidden } from '../../redux/cart/cartAction';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { createStructuredSelector } from 'reselect';

const CartDropdown = ({ cartItems, toggleHidden, history }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem cart={cartItem} key={cartItem.id} />
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        toggleHidden();
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const mapDispatchToProps = dispatch => ({
  toggleHidden: () => dispatch(toggleHidden())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
