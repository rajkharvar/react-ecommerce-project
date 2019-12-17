import React, { Component } from 'react';

import SignIn from '../../components/sign-in/SignIn';
import './sign-in-and-sign-up.scss';
import SignUp from '../../components/sign-up/SignUp';

export default class SignInAndSignUp extends Component {
  render() {
    return (
      <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
      </div>
    );
  }
}
