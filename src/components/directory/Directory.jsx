import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import MenuItem from '../menu-item/MenuItem';
import './directory.scss';
import Shop from '../../pages/shop/Shop';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directorySelector';

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...sectionProps }) => (
      <MenuItem key={id} {...sectionProps} />
    ))}
    <Route path='/shop/' component={Shop} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps, null)(Directory);
