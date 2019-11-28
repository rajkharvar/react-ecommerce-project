import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Homepage} />
      <Route path="/shop" component={Shop} />
    </div>
  );
}

export default App;
