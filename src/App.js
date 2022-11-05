
import './App.css';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/current-weather/CurrentWeather';
import { Weather_Api_URL } from './api';
import { Weather_Api_KEY } from './api';
import { useState } from 'react';



function App() {
  const[currentWeather, setCurrentWeather] = useState(null);
  const[forecastWeather ,setForecastWeather]= useState(null);
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${Weather_Api_URL}/weather?lat=${lat}&lon=${lon}&appid=${Weather_Api_KEY}&units=metric`);
    const forecastFetch = fetch(`${Weather_Api_URL}/forecast?lat=${lat}&lon=${lon}&appid=${Weather_Api_KEY}&units=metric`);
    
    Promise.all([currentWeatherFetch, forecastFetch]).then(
      async (response) => {
        const weatherReasponse = await response[0].json();
        const forecastReasponse = await response[1].json();
        setCurrentWeather({city: searchData.label , ...weatherReasponse});
        setForecastWeather({city: searchData.label, ...forecastReasponse});
      })
    .catch((err)=>console.log(err))
    
  }
  console.log(currentWeather);
  console.log(forecastWeather);
  return (
    <div className='container'>
         <SearchBar
            onSearchChange={handleOnSearchChange}
      ></SearchBar>
     <CurrentWeather data={currentWeather} ></CurrentWeather>
    </div>
   
  );
}

export default App;
