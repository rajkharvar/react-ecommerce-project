import React from 'react';
import { Route } from 'react-router-dom';

import './homepage.scss';
import Directory from '../../components/directory/Directory';

export default function Homepage() {
  return (
    <div className='homepage'>
      <Route path='/' component={Directory} />
    </div>
  );
}
