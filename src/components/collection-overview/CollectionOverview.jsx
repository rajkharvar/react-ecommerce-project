import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCollections,
  selectCollectionsForPreview
} from '../../redux/shop/shopSelector';
import { CollectionPreview } from '../collection-preview/CollectionPreview';

const CollectionOverview = ({ collections }) => (
  <div>
    {collections.map(collection => (
      <CollectionPreview key={collection.id} collection={collection} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps, null)(CollectionOverview);
