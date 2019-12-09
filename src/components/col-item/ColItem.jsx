import React from 'react';
import { connect } from 'react-redux';

import './col-item.scss';
// import { CustomButton } from '../custom-button/CustomButton';
import { addToCart } from '../../redux/cart/cartAction';
import {
  AddToCart,
  NameContainer,
  PriceContainer,
  CollectionFooter,
  BackgroundImage,
  CollectionItemContainer
} from './ColItemContainer';

const ColItem = ({ item, addToCart }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooter>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooter>
      <AddToCart onClick={() => addToCart(item)} inverted>
        Add to Cart
      </AddToCart>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addToCart(item))
});

export default connect(null, mapDispatchToProps)(ColItem);
