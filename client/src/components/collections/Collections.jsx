import React from 'react';

import CollectionItem from '../collection-item/CollectionItem';
import '../directory/directory.scss';

const Collections = ({ details }) => (
  <div className='directory-menu'>
    {details.map(detail => (
      <CollectionItem key={detail.id} {...detail} />
    ))}
  </div>
);

export default Collections;
