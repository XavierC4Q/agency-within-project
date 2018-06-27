import axios from 'axios'

export const infoDallas = async function(){
  let path = 'https://api.openweathermap.org/data/2.5/weather?q=Dallas,us&APPID=08a5055e52cf5e6cb3963ccaf44ef774'
  let dallasWeather = await axios.get(path)
  return dallasWeather
}

export const infoNewYork = async function(){
  let path = 'https://api.openweathermap.org/data/2.5/weather?q=New York,us&APPID=08a5055e52cf5e6cb3963ccaf44ef774'
  let newyorkWeather = await axios.get(path)
  return newyorkWeather
}

export const infoLosAngeles = async function(){
  let path = 'https://api.openweathermap.org/data/2.5/weather?q=Los Angeles,us&APPID=08a5055e52cf5e6cb3963ccaf44ef774'
  let dallasWeather = await axios.get(path)
  return dallasWeather
}

export const infoBoston = async function(){
  let path = 'https://api.openweathermap.org/data/2.5/weather?q=Boston,us&APPID=08a5055e52cf5e6cb3963ccaf44ef774'
  let bostonWeather = await axios.get(path)
  return bostonWeather
}

export const infoHouston = async function(){
  let path = 'https://api.openweathermap.org/data/2.5/weather?q=Houston,us&APPID=08a5055e52cf5e6cb3963ccaf44ef774'
  let houstonWeather = await axios.get(path)
  return houstonWeather
}
