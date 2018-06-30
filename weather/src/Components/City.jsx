import React from 'react'
import {Link} from 'react-router-dom'

export const City = ({city}) => {

  let currentTemp = ~~(city.temp * (9 / 5) - 459.67)
  let isHot = currentTemp > 80
  let isMild = currentTemp > 55
  let maxTemp = ~~(city.temp_max * (9 / 5) - 459.67)
  let minTemp = ~~(city.temp_min * (9 / 5) - 459.67)
  let humidity = city.humidity + '%'
  let sunrise = new Date(city.sunrise * 1000)
  let sunset = new Date(city.sunset * 1000)
  let sunriseHour = sunrise.getHours() <= 12
    ? sunrise.getHours()
    : sunrise.getHours() - 12
  let sunsetHour = sunset.getHours() <= 12
    ? sunset.getHours()
    : sunset.getHours() - 12
  let sunriseMinutes = sunrise.getMinutes() <= 9
    ? '0' + sunrise.getMinutes()
    : sunrise.getMinutes()
  let sunsetMinutes = sunset.getMinutes() <= 9
    ? '0' + sunset.getMinutes()
    : sunset.getMinutes()
  let weatherImg = `http://openweathermap.org/img/w/${city.icon}.png`

  return (<div className='city-container'>
    <div className='city-info-container'>
      <h1 className='city-name'>{city.city_name}</h1>
      <div className='city-weather'>
        <div className='city-weather-image'>
          <img height='100%' width='100%' src={weatherImg} alt='weather'/>
        </div>
      </div>
      <span className={isHot
          ? 'hot'
          : isMild
            ? 'mild'
            : 'cold'}>{currentTemp + '℉'}</span>
      <div className='weather-info-extended'>
        <p>Low: {minTemp + '℉'}</p>
        <p>High: {maxTemp + '℉'}</p>
        <p>Humidity: {humidity}</p>
        <p>Sunrise: {sunriseHour + ':' + sunriseMinutes + ' AM'}</p>
        <p>Sunset: {sunsetHour + ':' + sunsetMinutes + ' PM'}</p>
      </div>
    </div>
    <div className='back-link'>
      <Link to='/'>Back to Main Page</Link>
    </div>
  </div>)
}
