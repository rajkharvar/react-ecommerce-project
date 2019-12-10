import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionLoaded } from '../../redux/shop/shopSelector';
import WithSpinner from '../../components/spinner/WithSpinner';
import Collection from './Collection';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionLoaded(state)
});

export const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);
