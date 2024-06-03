"use client"
import { useContext, createContext, useState, useEffect, Dispatch, SetStateAction } from "react";
import axios from 'axios';

export interface WeatherItemType {
    dt_txt: string;
    wind: any;
    main: any;
    weather: any;
    windspeed: number;
    humidity: number;
    temperature: number;
    setPlace: (str: string) => void;
    values: number[];
    thisLocation: string;
    place: string;
  };


const StateContext = createContext<{
    weather: WeatherItemType | null,
    setPlace: Dispatch<SetStateAction<string>>,
    values: number[],
    thisLocation: string,
    place: string
} | null>(null);


export const StateContextProvider = ({ children }:any) => {
    const [weather, setWeather] = useState<WeatherItemType | null>(null);
    const [values, setValues] = useState<number[]>([]);
    const [place, setPlace] = useState<string>('Lindon');
    const [thisLocation, setLocation] = useState('');

// Fetch API
const fetchWeather = async () => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
            params: {
                lat: 40.3275,
                lon: 111.7652,
                appid: "113484528e97e3c5697cbe60c9d6fc07",
                q: "Lindon",
                units: "imperial"
            }
        });
        
        if (response && response.data && response.data.city && response.data.list) {
            const fiveDaysAtMidnight = response.data.list.filter(
                (currentTimeForecast: { dt_txt: string }) => !!currentTimeForecast.dt_txt.includes('00:00:00')
            )
            // Update state with the location and forecast data
            setLocation(response.data.city.name);
            setWeather(fiveDaysAtMidnight);
        } else {
            console.error('Empty or unexpected response received from the API');
            alert('Failed to fetch weather data. Please try again later.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Failed to fetch weather data. Please try again later.');
    }
};





    useEffect(() => {
        fetchWeather();
    }, [place]);

    return (
        <StateContext.Provider value={{    
            weather,
            setPlace,
            values,
            thisLocation,
            place
        }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
