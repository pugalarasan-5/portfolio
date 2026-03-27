
import { useState } from 'react';
import './climate.css';
import Air from './assets/air.png';
import Human from './assets/human.png';
import Search from './assets/search.png';
import { useNavigate } from 'react-router-dom';

function App() {

  const [city, setCity] = useState('Chennai');
  const [temp, setTemp] = useState(null);
  const [county, setCounty] = useState('');
  const [image, setImage] = useState('');
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [hum, setHum] = useState(null);
  const [wind, setWind] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [cityNotFound, setCityNotFound] = useState(false);

  const API_KEY = "f82073a61f4d8c278c528e5279cfbf59";

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const getWeather = async () => {
    if (!city.trim()) return; // Prevent empty city search
    setLoading(true);
    setCityNotFound(false);
    setError(false);

    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      let res = await fetch(url);
      let data = await res.json();

      if (data.cod === '404') {
        setCityNotFound(true);
        setLoading(false);
        return;
      }

      setTemp(data.main.temp);
      setCounty(data.sys.country);
      setImage(`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
      setLat(data.coord.lat);
      setLon(data.coord.lon);
      setHum(data.main.humidity);
      setWind(data.wind.speed);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(true);
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      getWeather();
    }
  };

  return (
    <div className="app">
        <div className="container-climate">
      {/* Search Bar */}
      <div className="search">
        <input
          type="text"
          value={city}
          placeholder="City Name"
          onChange={handleCityChange}
          onKeyDown={handleKeyDown}
        />
        <img src={Search} alt="Search" onClick={getWeather} />
      </div>

      {/* Weather Data */}
      {!loading && !cityNotFound && temp !== null && (
        <div className="weather">
          <img src={image} alt="Weather Icon" />
          <div className="temp">{temp}°C</div>
          <div className="city">{city}</div>
          <div className="country">{county}</div>
          <div className="location">
            <div>Latitude: <span>{lat}</span></div>
            <div>Longitude: <span>{lon}</span></div>
          </div>
          <div className="live">
            <div className="humidity">
              <img src={Human} alt="Humidity" /> {hum}% <span>Humidity</span>
            </div>
            <div className="wind-speed">
              <img src={Air} alt="Wind" /> {wind} km/h <span>Wind Speed</span>
            </div>
          </div>
        </div>
      )}

      {/* Messages */}
      {loading && <div className="loading">Loading...</div>}
      {cityNotFound && <div className="error">City not found</div>}
      {error && <div className="error">Error fetching data</div>}
      <button onClick={() => navigate('/')}>Back</button>
      <p>Design by <span>Pugal Arasan</span></p>
    </div>
    </div>
  );
}

export default App;
