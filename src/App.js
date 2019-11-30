import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Homepage from './pages/homepage/Homepage';
import { Header } from './components/header/Header';
import { Contact } from './pages/contact/Contact'
import ShopPage from './pages/shop/Shop';
import SignIn from './components/sign-in/SignIn';
import { auth } from './firebase/firebase.utils'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
