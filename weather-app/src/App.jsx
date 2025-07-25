import { useState } from 'react'
import './App.css'
import './index.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  // API call function
  const fetchWeather = async () => {
    if (!city) return;  // return nothing
    const res = await fetch(
       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5945235a0d677ae8c37c93666b09fc87&units=metric`
    ); //use backtick
    const data = await res.json();
    setWeather(data);
  };


  return (
    <>
    <div className="app">
      <h1>🌤️ Weather App</h1>
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {weather && weather.main && (
        <div className="weather-info">
          <h2>   {weather.name} , {weather.sys.country}  </h2>
          <p>🌡 Temp: {weather.main.temp} °C</p>
          <p>📝 Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
    </>
  )
}

export default App
