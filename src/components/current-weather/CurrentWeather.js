import './currentWeather.css'
import React from 'react'

export default function CurrentWeather({ data }) {
  console.log(data);
 
  return (
    <div className='wrapper'>
      <div className='top'>
        <div>
          <p className='city'>{}</p>
          <p className='weather-description'>{ }</p>
        </div>
       <img src="icons/04d.png" alt="weather" className="weather-img"/>
      </div>
      <div className='bottom'>
        <p className='temperature'>22°C</p>
        <div className='details'>
          <div className='parameter-row'>
            <span className='parameter-label'>Feels like </span>
            <span className='parameter-value'>22c</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Winds</span>
            <span className='parameter-value'>2m/s</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Humidity </span>
            <span className='parameter-value'>20%</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>pressure </span>
            <span className='parameter-value'>2hbs</span>
          </div>
        </div>
      </div>
    </div>
  )
}
