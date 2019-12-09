import React from 'react';

import './custom-button.scss';
import { CustomButtonContainer } from './CustomButtonContainer';

export const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);
