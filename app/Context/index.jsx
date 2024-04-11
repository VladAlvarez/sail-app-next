"use client"
import { useContext, createContext, useState, useEffect } from "react";
import axios from 'axios';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const [weather, setWeather] = useState({});
    const [values, setValues] = useState([]);
    const [place, setPlace] = useState('Lindon');
    const [thisLocation, setLocation] = useState('');

// Fetch API
const fetchWeather = async () => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
            params: {
                lat: 40.3275,
                lon: 111.7652,
                appid: "113484528e97e3c5697cbe60c9d6fc07",
                q: "Lindon"
            }
        });

        // Log the entire response data object to the console
        console.log('Response:', response.data);
        
        if (response && response.data && response.data.city && response.data.list) {
            const fiveDaysAtMidnight = response.data.list.filter(
                currentTimeForecast => currentTimeForecast.dt_txt.includes('00:00:00')
            )
            console.log('fiveDay:', fiveDaysAtMidnight);
            // Update state with the location and forecast data
            setLocation(response.data.city.name);
            setWeather(fiveDaysAtMidnight);
        } else {
            console.error('Empty or unexpected response received from the API');
            // Handle empty or unexpected response
            alert('Failed to fetch weather data. Please try again later.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        // Handle errors gracefully
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
            thisLocation,
            place
        }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
