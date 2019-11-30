import React, { Component } from 'react';

import { FormInput } from '../form-input/FormInput';
import { CustomButton } from '../custom-button/CustomButton';
import './sign-in.scss';
import { signInWithGoogle } from '../../firebase/firebase.utils';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  };
  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <FormInput
          type='email'
          value={this.state.email}
          onChange={this.handleChange}
          name='email'
          label='email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={this.state.password}
          onChange={this.handleChange}
          label='password'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit' onSubmit={this.handleSubmit}>
            SignIn
          </CustomButton>
          <CustomButton onClick={signInWithGoogle} googleAuth>
            {' '}
            SignIn With Google{' '}
          </CustomButton>
        </div>
      </div>
    );
  }
}
