import React from "react";
import { useAppSelector} from "../../app/hooks";
import { TailSpin } from 'react-loader-spinner';
import * as s from "./WeatherDisplayStyles";

const WeatherDisplay: React.FC = () => {
    const weather = useAppSelector((state) => state.weather.data);
    const status = useAppSelector((state) => state.weather.status);
    const error = useAppSelector((state) => state.weather.error);

    if (status === 'loading') {
        return (
        <s.WeatherDisplayContainer>
            <TailSpin/>
            <p>Loading...</p>
        </s.WeatherDisplayContainer>
        )
    }

    if (status === 'failed') {
        return <s.WeatherDisplayContainer>Error: {error}</s.WeatherDisplayContainer>
    }
        return (
            weather && (
                <s.WeatherDisplayContainer>
                    <s.WeatherCard>
                    <h2>{weather.name}</h2>
                    <s.Temperature>{weather.main.temp}°C</s.Temperature>
                    <s.Description>{weather.weather[0].description}</s.Description>
                    </s.WeatherCard>
                </s.WeatherDisplayContainer>
            )
        );
    }

export default WeatherDisplay;