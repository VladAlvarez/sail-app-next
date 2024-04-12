"use client"
import { useEffect, useState } from "react"
import { useDate } from '../Utils/useDate'
import '../globals.css'

export default function WeatherCard({
  temperature,
  windspeed,
  humidity,
  place,
  iconString,
  conditions
}) {

  const [icon, setIcon] = useState(sun)
  const { time } = useDate()

  // set weather card icon
  useEffect(() => {
    if(iconString) {
      if(iconString.toLowerCase().includes('cloud')) {
        setIcon(cloud)
      } else if(iconString.toLowerCase().includes('rain')) {
        setIcon(rain)
      } else if(iconString.toLowerCase().includes('clear')) {
        setIcon(sun)
      } else if(iconString.toLowerCase().includes('thunder')) {
        setIcon(storm)
      } else if(iconString.toLowerCase().includes('fog')) {
        setIcon(fog)
      } else if(iconString.toLowerCase().includes('snow')) {
        setIcon(snow)
      } else if(iconString.toLowerCase().includes('wind')) {
        setIcon(wind)
      }
    }
  }, [iconString])
  

  return (
    <div className="w-[22rem] min-w-[22rem] h-[30rem] weatherCard p-4">
      <div className="flex w-full justify-center, items-center gap-4 mt-12 mb-4">
        <Img src={icon} alt="weather-icon" />
        <p className="font-bold text-2xl flex justify-center items-center">{temperature} &deg;F</p>
      </div>
      <div className="font-bold text-center text-xl">
        {place}
      </div>
      <div className="w-full flex justify-between items-center mt-4">
        <p className="flex-1 text-center p-2">{new Date().toDateString()}</p>
        <p className="flex-1 text-center p-2">{time}</p>
        <div className="w-full flex justify-center items-center mt-4 gap-4">
          <p className="flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg">Wind Speed <p className="font-normal">{windspeed}</p></p>
          <p className="flex-1 text-center p-2 font-bold rounded-lg bg-green-600">Humidity <p className="font-normal">{humidity}</p></p>
        </div>
        <hr className="bg-slate-600"/>
        <div className="w-full p-4 flex justify-center items-center text-xl font-semibold">
          {conditions}
        </div>
      </div>
    </div>
  )
}
