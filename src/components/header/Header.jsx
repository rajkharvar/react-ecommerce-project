import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.scss';

export const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo />
    </Link>
    <div className='options'>
      <Link to='/shop' className='option'>
        SHOP
      </Link>
      <Link to='/contact' className='option'>
        CONTACT
      </Link>
      <Link to='/signin' className='option'>
        SignIn
      </Link>
    </div>
  </div>
);
