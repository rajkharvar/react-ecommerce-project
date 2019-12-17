import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.scss';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectCurrentUser } from '../../redux/user/userSelector';
import { selectCartHidden } from '../../redux/cart/cartSelector';
import { signOutStart } from '../../redux/user/userAction';

const Header = ({ currentUser, hidden, signOutStart }) => (
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
        <div className='option' onClick={signOutStart}>
          Signout
        </div>
      ) : (
        <Link to='/signin' className='option'>
          SignIn
        </Link>
      )}
      <CartIcon />
    </div>
    {!hidden ? <CartDropdown /> : null}
  </div>
);

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
