import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import Homepage from './pages/homepage/Homepage';
import Header from './components/header/Header';
import { Contact } from './pages/contact/Contact'
import ShopPage from './pages/shop/Shop';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp';
import { auth, createUserProfile } from './firebase/firebase.utils'
import setCurrentUser from './redux/user/userAction';
import { connect } from 'react-redux'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props
    console.log(this.props)
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth)
        userRef.onSnapshot(snapshot => {
          // * default state
          // this.setState({
          //   currentUser: {
          //     id: snapshot.id,
          //     ...snapshot.data()
          //   }
          // }, () => console.log(this.state))
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })

      } else {
        // this.setState({ currentUser: userAuth })
        setCurrentUser(userAuth)
      }
      console.log(this.state)
    })
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
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/signin"
            render={() => (
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
