import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

//опис структури стану для погоди
interface WeatherState {
    data: any | null;  //тут буде відповідь з АРІшки
    status: 'idle' | 'loading' | 'succeeded' | 'failed'; // статус запиту
    error: string | null; // помилки, якщо виникають
}

const initialState: WeatherState = {
    data: null,
    status: 'idle',
    error: null,
}

//Асинхронна дія для запиту погоди
export const fetchWeatherData = createAsyncThunk(
    'weather/fetchWeatherData',
    async (city: string) => {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=КЛЮЧ_З_OPW`
        );
        return response.data;
    }
);

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeatherData.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchWeatherData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchWeatherData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Could not fetch weather data';
            });
        },
    });

export default weatherSlice.reducer;

