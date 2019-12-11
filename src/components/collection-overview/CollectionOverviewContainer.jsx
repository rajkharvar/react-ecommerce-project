import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionFetching } from '../../redux/shop/shopSelector';
import WithSpinner from '../spinner/WithSpinner';
import CollectionOverview from './CollectionOverview';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

// * Here WithSpinner is an Higher Order Component which receives an CollectionOverview as an argument
// * isLoading is also passed to WithSpinner for loading state

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
