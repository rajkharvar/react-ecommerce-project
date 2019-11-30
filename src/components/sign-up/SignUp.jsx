import React, { Component } from 'react';

import { FormInput } from '../form-input/FormInput';
import { CustomButton } from '../custom-button/CustomButton';
import './sign-up.scss';

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            label='DisplayName'
            value={displayName}
            name='displayName'
            onChange={this.handleChange}
            required
          />
          <FormInput
            type='Email'
            label='mail'
            value={email}
            name='email'
            onChange={this.handleChange}
            required
          />
          <FormInput
            type='password'
            label='Password'
            value={password}
            name='password'
            onChange={this.handleChange}
            required
          />
          <FormInput
            type='password'
            label='Confirm Password'
            value={confirmPassword}
            name='confirmPassword'
            onChange={this.handleChange}
            required
          />
          <CustomButton type='submit'>SignUp</CustomButton>
        </form>
      </div>
    );
  }
}
