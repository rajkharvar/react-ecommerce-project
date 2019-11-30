import React from 'react';

import './custom-button.scss';

export const CustomButton = ({ children, googleAuth, ...otherProps }) => (
  <button
    {...otherProps}
    className={`custom-button ${googleAuth ? 'google-auth' : ''}`}
  >
    {children}
  </button>
);
