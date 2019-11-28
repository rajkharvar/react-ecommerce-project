import React, { Component } from 'react';
import Collections from '../../components/collections/Collections';

import shopDetails from '../../constants/shop.data';

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collectionDetails: shopDetails,
      details: []
    };
  }

  componentDidMount() {
    this.state.collectionDetails.map(collection => {
      if (collection.routeName === this.props.location.pathname) {
        collection.items.forEach(collection => console.log(collection.name));
        this.setState({ details: collection.items });
        return;
      }
    });
  }
  render() {
    const { details } = this.state;
    return (
      <div>
        {details ? (
          <Collections details={details} />
        ) : (
          <div>Sorry! This Page does not exist</div>
        )}
      </div>
    );
  }
}
