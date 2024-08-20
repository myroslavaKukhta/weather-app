import React from "react";
import { useAppSelector} from "../../app/hooks";

const WeatherDisplay: React.FC = () => {
    const weather = useAppSelector((state) => state.weather.data);
    const status = useAppSelector((state) => state.weather.status);
    const error = useAppSelector((state) => state.weather.error);

    if (status === 'loading') {
        return <div>Loading...</div>
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>

        return (
            weather && (
                <div>
                    <h2>{weather.name}</h2>
                    <p>{weather.main.temp}C</p>
                    <p>{weather.weather[0].description}</p>
                </div>
            )
        );
    }
}

export default WeatherDisplay;