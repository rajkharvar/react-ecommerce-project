import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionsLoaded } from '../../redux/shop/shopSelector';
import WithSpinner from '../../components/spinner/WithSpinner';
import Collection from './Collection';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionContainer = compose(
  connect(mapStateToProps, null),
  WithSpinner
)(Collection);

export default CollectionContainer;
