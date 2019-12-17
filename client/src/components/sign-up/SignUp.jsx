import React, { Component } from 'react';

import { FormInput } from '../form-input/FormInput';
import { CustomButton } from '../custom-button/CustomButton';
import './sign-up.scss';
import { signUpStart } from '../../redux/user/userAction';
import { connect } from 'react-redux';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  checkPassword() {
    if (this.state.password === this.setState.confirmPassword) {
      return true;
    }
    return false;
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Password didn't match");
      return;
    }
    const { signUpStart } = this.props;
    signUpStart(email, password, displayName);
    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password
    //   );
    //   await createUserProfile(user, { displayName });
    //   this.setState({
    //     displayName: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: ''
    //   });
    // } catch (error) {
    //   console.error(error);
    // }
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
            type='email'
            label='Email'
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

const mapDispatchToProps = dispatch => ({
  signUpStart: (email, password, displayName) =>
    dispatch(signUpStart({ email, password, displayName }))
});

export default connect(null, mapDispatchToProps)(SignUp);
