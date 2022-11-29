import React from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion"
import './forecastWeather.css'
import '../current-weather/currentWeather.css'

export default function ForecastWeather({ data }) {
    const Week_Days = ['Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const dayInAWeek = new Date().getDay;
    const forecastdays = Week_Days.slice(dayInAWeek, Week_Days.length).concat(Week_Days.slice(0, dayInAWeek));
    console.log(forecastdays);
    return (
        <>
            <label className='title'>Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className='daily-item'>
                                    <img className='small-icon' src={`icons/${item.weather[0].icon}.png`} alt="weather" />
                                    <label className='day'>{forecastdays[idx]}</label>
                                    <label className='desc'>{item.weather[0].description}</label>
                                    <label className='min-max'>{Math.round(item.main.temp_min)}°C/{Math.round(item.main.temp_max)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <div className='forecast-details'>
                               
                                <div className='parameter-row'>

                                    <span className='parameter-label'>Feels like</span>
                                    <span className='parameter-value'>{item.main.feels_like}°C</span>
                                </div>
                                <div className='parameter-row'>
                                    <span className='parameter-label'>Winds</span>
                                    <span className='parameter-value'>{item.wind.speed}m/s</span>
                                </div>
                                <div className='parameter-row'>
                                    <span className='parameter-label'>Humidity </span>
                                    <span className='parameter-value'>{item.main.humidity}%</span>
                                </div>
                                <div className='parameter-row'>
                                    <span className='parameter-label'>pressure </span>
                                    <span className='parameter-value'>{item.main.pressure}hPa</span>
                                </div>
                            </div>
                        </AccordionItemPanel>

                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}
