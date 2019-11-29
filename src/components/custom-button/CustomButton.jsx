import React from 'react';

import './custom-button.scss';

export const CustomButton = ({ children, ...otherProps }) => (
  <button {...otherProps} className='custom-button'>
    {children}
  </button>
);
