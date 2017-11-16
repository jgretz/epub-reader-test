import React, {Component} from 'react';
import {withRouter} from 'react-router';

import {Pagemenu, Title} from './features/menu/components';
import {Routes} from './features/shared/components';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Title />
        <Pagemenu>
          <Routes />
        </Pagemenu>
      </div>
    );
  }
}

export default withRouter(
  App
);
