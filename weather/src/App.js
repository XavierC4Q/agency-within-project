import React, { Component } from 'react';
import {Route, Link, Switch} from 'react-router-dom'

import Router from './Components/Router'

const styles = {
    appContainer: {
      margin: "0",
      height: "100vh"
    }
}

class App extends Component {
  render() {
    return (
      <div style={styles.appContainer}>
        <Switch>
          <Route exact path='/' component={Router} />
          <Route exact path='/city/:city_name' component={Router} />
        </Switch>
      </div>
    );
  }
}

export default App;
