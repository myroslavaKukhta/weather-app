import React from 'react';
import './App.css';
import WeatherDisplay from "./features/weather/WeatherDisplay";
import WeatherSearch from "./features/weather/WeatherSearch";

const App: React.FC = () => {
  return (
    <div className="App">
      <p>
          Weather
      </p>
        <WeatherSearch/>
        <WeatherDisplay/>
    </div>
  );
}

export default App;
