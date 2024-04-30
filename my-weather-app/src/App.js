//for fetching data from api used fetch method
import { useState, useEffect } from 'react';
import WeatherCard from './Weather';
import './App.css';

//import search icon
import SearchIcon from './search.svg';

//aaf767abe47c357a819ebb75ad9636d7
//API_URL based on openweather
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=aaf767abe47c357a819ebb75ad9636d7'

//app functional component
function App() {
//weatherData state is initialized as an empty string because it will store the weather data
  const [weatherData, setWeatherData] = useState('');
//searchTerm state is initialized as an empty string and it will store the search term entered by the user
  const [searchTerm, setSearchTerm] = useState('');
//weather_info is an async function that fetches weather data for a given city
  const weather_info = async (cityName) => {
//The response from the API is stored in the response variable
    const response = await fetch(`${API_URL}&q=${cityName}`);
//The JSON data from the response is stored in the data variable
    const data = await response.json();
    console.log(data);
//The weatherData state is updated with the data from the API
    setWeatherData(data);
  };
  // call to the useEffect hook
  useEffect(() => {
    weather_info('Finland');
    }, []);
 //return contains the JSX that will be rendered by the App component
  return (
    <div className="app">
      <h1>Current Weather</h1>{/* Title of the page */}
      <div className="search">
              {/* Text input for the user to enter a location */}
        <input type="text" placeholder='Search Location' value = {searchTerm}
            onChange = {(e) => setSearchTerm(e.target.value)}/>
                  {/* Search button that triggers the weather_info function when clicked */}
            <img src={SearchIcon} alt="Search"
            onClick={() => weather_info(searchTerm)} />
      </div>
      {/*To fetch the jsx into return */}
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
  }
export default App;
