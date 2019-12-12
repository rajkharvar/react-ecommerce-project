import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shopSelector';
import ColItem from '../../components/col-item/ColItem';
import './collection.scss';

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className='collection'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <ColItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, { match }) => ({
  collection: selectCollection(match.params.collectionId)(state)
});

export default connect(mapStateToProps, null)(Collection);
