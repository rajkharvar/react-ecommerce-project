import React from 'react';

import CollectionItem from '../collection-item/CollectionItem';

const Collections = ({ details }) => (
  <div>
    {details.map(detail => (
      <CollectionItem key={detail.id} {...detail} />
    ))}
  </div>
);

export default Collections;
