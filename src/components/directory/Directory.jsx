import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import MenuItem from '../menu-item/MenuItem';
import sections from '../../constants/directory.data';
import './directory.scss';
import Shop from '../../pages/shop/Shop';

export default class Directory extends Component {
  render() {
    return (
      <div className='directory-menu'>
        {sections.map(({ id, ...sectionProps }) => (
          <MenuItem key={id} {...sectionProps} />
        ))}
        <Route path='/shop/' component={Shop} />
      </div>
    );
  }
}
