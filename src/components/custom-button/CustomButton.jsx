import React from 'react';

import './custom-button.scss';

export const CustomButton = ({
  children,
  googleAuth,
  inverted,
  ...otherProps
}) => (
  <button
    {...otherProps}
    className={`custom-button ${googleAuth ? 'google-auth' : ''} ${
      inverted ? 'inverted' : ''
    }`}
  >
    {children}
  </button>
);
