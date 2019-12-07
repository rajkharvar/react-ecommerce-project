import React from 'react';

import ColItem from '../col-item/ColItem';
import './collection-preview.scss';

export const CollectionPreview = ({ collection: { title, items } }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx <= 4)
          .map(item => (
            <ColItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};
