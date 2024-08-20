import React, { useState } from "react";
import { useAppDispatch } from '../../app/hooks';
import { fetchWeatherData } from "./weatherSlice";

const WeatherSearch: React.FC = () => {
    const [city, setCity] = useState('');
    const dispatch = useAppDispatch();

    const handleSearch = () => {
        if (city.trim()) {
            dispatch(fetchWeatherData(city));
        }
    };

    return (
        <div>
            <input
                type='text'
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
                />
            <button onClick={handleSearch}>Get Weather</button>
        </div>
    );
};

export default WeatherSearch;