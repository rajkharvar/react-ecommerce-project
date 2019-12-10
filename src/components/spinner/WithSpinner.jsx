import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './SpinnerContainer';

// * HOC - Higher Order Component receives component as an argument and sends some component as return value
const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerContainer>
        <SpinnerOverlay />
      </SpinnerContainer>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
