import React, { Component } from 'react';

import MenuItem from '../menu-item/MenuItem';
import sections from '../../constants/directory.data';
import './directory.scss';

export default class Directory extends Component {
  render() {
    return (
      <div className='directory-menu'>
        {sections.map(({ id, ...sectionProps }) => (
          <MenuItem key={id} {...sectionProps} />
        ))}
      </div>
    );
  }
}
