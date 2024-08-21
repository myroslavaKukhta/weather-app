import React, { useState } from "react";
import { useAppDispatch } from '../../app/hooks';
import { fetchWeatherData } from "./weatherSlice";
import * as s from './WeatherSearchStyles';

const WeatherSearch: React.FC = () => {
    const [city, setCity] = useState('');
    const dispatch = useAppDispatch();

    const handleSearch = () => {
        if (city.trim()) {
            dispatch(fetchWeatherData(city));
        }
    };

    return (
        <s.WeatherSearchContainer>
            <s.Title>Погодка</s.Title>
            <s.WeatherInput
                type='text'
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
                />
            <s.WeatherButton onClick={handleSearch}>Get Weather</s.WeatherButton>
        </s.WeatherSearchContainer>
    );
};

export default WeatherSearch;