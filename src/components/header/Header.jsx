import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.scss';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectCurrentUser } from '../../redux/user/userSelector';
import { selectCartHidden } from '../../redux/cart/cartSelectors';

const Header = ({ currentUser, hidden }) => (
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
      <CartIcon />
    </div>
    {!hidden ? <CartDropdown /> : null}
  </div>
);

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps, null)(Header);
