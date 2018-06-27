import React from 'react'
import {Route, Switch} from 'react-router-dom'

import {Oversight} from './Oversight'
import {City} from './City'

import * as API from '../Queries/API'

class Router extends React.Component {
  constructor(){
    super()

    this.state = {
      cities: []
    }
  }

  componentDidMount(){
    Promise.all([
      API.infoBoston(),
      API.infoDallas(),
      API.infoHouston(),
      API.infoNewYork(),
      API.infoLosAngeles()
    ])
    .then(values => {
      this.setState({ cities: [values[0].data, values[1].data, values[2].data, values[3].data, values[4].data] })
    })
    .catch(error => {
      console.log('error',error)
    })
  }

  renderOversight = () => {
    const { cities } = this.state
    return (<Oversight cities={cities} />)
  }

  // renderCity = props => {
  //   const { city_id } = props.match.params
  //
  // }

  render(){
    console.log(API)
    return(
      <div>
        <Switch>
          <Route exact path='/' render={this.renderOversight} />
        </Switch>
      </div>
    )
  }
}

export default Router
