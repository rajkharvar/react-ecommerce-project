import React from 'react';
import { connect } from 'react-redux';

import './col-item.scss';
import { CustomButton } from '../custom-button/CustomButton';
import { addToCart } from '../../redux/cart/cartAction';

const ColItem = ({ item, addToCart }) => {
  console.log('addToCart');
  console.log(addToCart);
  const { name, price, imageUrl } = item;
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => addToCart(item)} inverted>
        Add to Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addToCart(item))
});

export default connect(null, mapDispatchToProps)(ColItem);
