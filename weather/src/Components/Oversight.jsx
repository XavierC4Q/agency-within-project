import React from 'react'
import {Link} from 'react-router-dom'

import '../Styles/Weather.css'

export const Oversight = ({cities, time}) => {
  let currentDate = time.toLocaleString().split(', ')
  let hours = time.getHours()

  let morning = hours >= 5 && hours < 12
  let afternoon = hours >= 12 && hours < 16
  let evening = hours >= 16 && hours < 20
  let night = hours >= 20 || hours < 5
  console.log(cities)
  return (<div>
    <div className='oversight-greeting'>
      <h1 className='oversight-header'>
        {
          morning
            ? 'Good Morning'
            : afternoon
              ? 'Good Afternoon'
              : evening
                ? 'Good Evening'
                : night
                  ? 'Good Night'
                  : ''
        }
      </h1>
      <div>
        {currentDate[0]}
      </div>
    </div>
    <div className='oversight-city-container'>
      {
        cities.map(city => {
          let path = `/city/${city.city_name}`
          let currentTemp = ~~(city.temp * (9/5) - 459.67)
          return (<div className='city-box'>
            <Link to={path}>
              <h3 className='city-box-header'>{city.city_name}</h3>
            </Link>
            <p>Current Temperature: {currentTemp}</p>
            <p>Weather: {city.weather_description}</p>
          </div>)
        })
      }
    </div>
  </div>)
}
