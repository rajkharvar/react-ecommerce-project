import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.scss';
import { toggleHidden } from '../../redux/cart/cartAction';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';

const CartIcon = ({ itemCount, toggleHidden }) => {
  return (
    <div className='cart-icon' onClick={() => toggleHidden()}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
  toggleHidden: () => dispatch(toggleHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
