import React from 'react';
import {Switch, Route} from 'react-router';

import {Reader} from '../../reader/components';

export default () => (
  <div className="container">
    <Switch>
      <Route path="/" component={Reader} />
    </Switch>
  </div>
);
