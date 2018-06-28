import React from 'react'
import {Link} from 'react-router-dom'

export const City = ({ city }) => {

  let currentTemp = ~~(city.temp * (9/5) - 459.67)
  let maxTemp = ~~(city.temp_max * (9/5) - 459.67)
  let minTemp = ~~(city.temp_min * (9/5) - 459.67)
  let humidity = city.humidity + '%'
  let sunrise = new Date(city.sunrise * 1000)
  let sunset = new Date(city.sunset * 1000)
  let sunriseHour = sunrise.getHours() <= 12 ? sunrise.getHours() : sunrise.getHours() - 12
  let sunsetHour = sunset.getHours() <= 12 ? sunset.getHours() : sunset.getHours() - 12
  let sunriseMinutes = sunrise.getMinutes() <= 9 ? '0' + sunrise.getMinutes() : sunrise.getMinutes()
  let sunsetMinutes = sunset.getMinutes() <= 9 ? '0' + sunset.getMinutes() : sunset.getMinutes()

  return(
    <div className='city-container'>
      <div className='city-head'>
        <div className='back-link'>
          <Link to='/'>Back to Main Page</Link>
        </div>
        <h1 className='city-name'>{city.city_name}</h1>
      </div>
      <div className='city-info-container'>
        <p>Currently: {currentTemp + '℉'}</p>
        <p>Low: {minTemp + '℉'} | High: {maxTemp + '℉'}</p>
        <p>Humidity: {humidity}</p>
        <p>Sunrise: {sunriseHour + ':' + sunriseMinutes + ' AM'} | Sunset: {sunsetHour + ':' + sunsetMinutes + ' PM'}</p>
      </div>
    </div>
  )
}
