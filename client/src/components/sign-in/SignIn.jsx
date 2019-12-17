import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormInput } from '../form-input/FormInput';
import { CustomButton } from '../custom-button/CustomButton';
import './sign-in.scss';
import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/userAction';

class SignIn extends Component {
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

  handleSubmit = async e => {
    e.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;
    emailSignInStart(email, password);
    // await auth.signInWithEmailAndPassword(
    //   this.state.email,
    //   this.state.password
    // );
    // this.setState({ email: '', password: '' });
  };
  render() {
    const { googleSignInStart } = this.props;
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            value={this.state.email}
            onChange={this.handleChange}
            name='email'
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit' onSubmit={this.handleSubmit}>
              SignIn
            </CustomButton>
            <CustomButton type='button' onClick={googleSignInStart} googleAuth>
              {' '}
              SignIn With Google{' '}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
