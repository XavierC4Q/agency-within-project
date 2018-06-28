import React from 'react'
import {Route, Switch} from 'react-router-dom'

import {Oversight} from './Oversight'
import {City} from './City'

import * as API from '../Queries/API'
import '../Styles/Weather.css'

class Router extends React.Component {
  constructor() {
    super()

    this.state = {
      cities: [],
      time: new Date()
    }
  }

  componentDidMount() {
    Promise.all([API.infoBoston(), API.infoDallas(), API.infoHouston(), API.infoNewYork(), API.infoLosAngeles()]).then(values => {
      this.setState({
        cities: [
          {
            ...values[0].data.main,
            ...values[0].data.sys,
            city_name: values[0].data.name,
            weather_description: values[0].data.weather[0].description
          }, {
            ...values[1].data.main,
            ...values[1].data.sys,
            city_name: values[1].data.name,
            weather_description: values[1].data.weather[0].description
          }, {
            ...values[2].data.main,
            ...values[2].data.sys,
            city_name: values[2].data.name,
            weather_description: values[2].data.weather[0].description
          }, {
            ...values[3].data.main,
            ...values[3].data.sys,
            city_name: values[3].data.name,
            weather_description: values[3].data.weather[0].description
          }, {
            ...values[4].data.main,
            ...values[4].data.sys,
            city_name: values[4].data.name,
            weather_description: values[4].data.weather[0].description
          }
        ]
      })
    }).catch(error => {
      console.log('error', error)
    })
  }

  renderOversight = () => {
    const {cities, time} = this.state
    return (<Oversight cities={cities} time={time}/>)
  }

  renderCity = props => {
    const {city_name} = props.match.params
    const {cities} = this.state

    const city_to_render = cities.filter((city) => {
      return city.city_name === city_name
    })

    if (city_to_render[0]) {
      return (<City city={city_to_render[0]}/>)
    } else {
      return (<div>city not found</div>)
    }
  }

  render() {
    return (<div className='weather-container'>
      <Switch>
        <Route exact path='/' render={this.renderOversight}/>
        <Route exact path='/city/:city_name' render={this.renderCity}/>
      </Switch>
    </div>)
  }
}

export default Router
