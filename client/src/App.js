import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import Homepage from './pages/homepage/Homepage';
import Header from './components/header/Header';
import { Contact } from './pages/contact/Contact'
import Checkout from './pages/checkout/Checkout'
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp';
import { checkUserSession } from './redux/user/userAction';
import { connect } from 'react-redux'
import { selectCurrentUser } from './redux/user/userSelector'
import { createStructuredSelector } from 'reselect'
import Shop from './pages/shop/Shop';


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props
    checkUserSession()
    /*
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth)
        userRef.onSnapshot(snapshot => {
          * default state
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          }, () => console.log(this.state))
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })

      } else {
        // this.setState({ currentUser: userAuth })
        setCurrentUser(userAuth)
      }
    })
    */
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/signin"
            render={() => (
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            )}
          />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
