import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shopSelector';
import ColItem from '../../components/col-item/ColItem';
import './collection.scss';
import { CollectionContainer } from './CollectionContainer';
import { kStringMaxLength } from 'buffer';

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className='collection'>
      <CollectionContainer>
        <h2 className='title'>{title}</h2>
        <div className='items'>
          {items.map(item => (
            <ColItem key={item.id} item={item} />
          ))}
        </div>
      </CollectionContainer>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);
