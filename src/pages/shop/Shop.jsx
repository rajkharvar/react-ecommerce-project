import React from 'react';

import collections from '../../constants/shop.data';
import { CollectionPreview } from '../../components/collection-preview/CollectionPreview';

export default function ShopPage() {
  return (
    <div>
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
}
