import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.scss';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='option logo-container' to='/'>
      <Logo />
    </Link>
    <div className='options'>
      <Link to='/shop' className='option'>
        SHOP
      </Link>
      <Link to='/contact' className='option'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          Signout
        </div>
      ) : (
        <Link to='/signin' className='option'>
          SignIn
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

export default connect(mapStateToProps, null)(Header);
