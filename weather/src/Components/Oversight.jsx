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
  let test = 'oversight-header'
  console.log(cities)
  return (<div>
    <div className='oversight-greeting'>
      <h1 className={test}>
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
      {currentDate[0]}
    </div>
    <div className='oversight-city-container'>
      {
        cities.map(city => {
          let path = `/city/${city.city_name}`
          let currentTemp = ~~(city.temp * (9 / 5) - 459.67)
          let isHot = currentTemp > 80
          let isMild = currentTemp > 55
          let weatherImg = `http://openweathermap.org/img/w/${city.icon}.png`
          return (<div className='city-box'>
            <Link to={path}>
              <h3 className='city-box-header'>{city.city_name}</h3>
            </Link>
            <span className='weather-description'>{city.weather_description}</span>
            <div className='weather-box'>
              <img src={weatherImg} alt='weather' className='weather-icon'/>
            </div>
            <span className={isHot
                ? 'hot'
                : isMild
                  ? 'mild'
                  : 'cold'}>{currentTemp + '℉'}</span>
          </div>)
        })
      }
    </div>
  </div>)
}
