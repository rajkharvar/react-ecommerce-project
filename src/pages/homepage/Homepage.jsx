import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './homepage.scss';
import Directory from '../../components/directory/Directory';

const DummyPage = () => <div>HATS Page</div>;

export default function Homepage() {
  return (
    <div className='homepage'>
      <Switch>
        <Route exact path='/' component={Directory} />
        <Route path='/hats' component={DummyPage} />
      </Switch>
    </div>
  );
}
