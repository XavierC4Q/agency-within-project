import React, { Component } from 'react';
import {Route, Link, Switch} from 'react-router-dom'

import Router from './Components/Router'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Router} />
          <Route exact path='/city/:city_id' component={Router} />
        </Switch>
      </div>
    );
  }
}

export default App;
