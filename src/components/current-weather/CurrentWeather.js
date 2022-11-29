import './currentWeather.css'
import React from 'react'

export default function CurrentWeather({ data }) {
  console.log(data);
 
  return (
    <div className='wrapper'>
      <div className='top'>
        <div>
          <p className='city'>{data.city}</p>
          <p className='weather-description'>{data.weather[0].description }</p>
        </div>
       <img src={`icons/${data.weather[0].icon}.png`} alt="weather" className="weather-img"/>
      </div>
      <div className='bottom'>
        <p className='temperature'>{ data.main.temp}°C</p>
        <div className='details'>
        <p className='title'>Details</p>
          <div className='parameter-row'>
          
            <span className='parameter-label'>Feels like</span>
            <span className='parameter-value'>{ data.main.feels_like}°C</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Winds</span>
            <span className='parameter-value'>{ data.wind.speed}m/s</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Humidity </span>
            <span className='parameter-value'>{ data.main.humidity}%</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>pressure </span>
            <span className='parameter-value'>{ data.main.pressure}hPa</span>
          </div>
        </div>
      </div>
    </div>
  )
}
