import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Homepage from './pages/homepage/Homepage';
import { Header } from './components/header/Header';
import { Contact } from './pages/contact/Contact'
import ShopPage from './pages/shop/Shop';
import SignIn from './components/sign-in/SignIn';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/signin" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
