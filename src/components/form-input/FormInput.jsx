import React from 'react';

import './form-input.scss';

export const FormInput = ({ handleChange, label, ...otherProps }) => {
  console.log(otherProps);
  return (
    <div className='group'>
      <input className='form-input' onChange={handleChange} {...otherProps} />
      {label ? <label className='form-input-label'>{label}</label> : null}
    </div>
  );
};
