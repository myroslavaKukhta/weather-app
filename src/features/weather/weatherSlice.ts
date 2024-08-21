import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';

interface WeatherState {
    data: any | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: WeatherState = {
    data: null,
    status: 'idle',
    error: null,
}

export const fetchWeatherData = createAsyncThunk(
    'weather/fetchWeatherData',
    async (city: string) => {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=cbf8be1e8f4f04efb1fc0e9d61542e94`
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
            .addCase(fetchWeatherData.pending, (state: WeatherState) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchWeatherData.fulfilled, (state: WeatherState, action: PayloadAction<any>) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchWeatherData.rejected, (state: WeatherState, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Could not fetch weather data';
            });
    },
});

export default weatherSlice.reducer;


