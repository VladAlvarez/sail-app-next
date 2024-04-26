"use client"
import React from 'react'
import { useDate } from '../Utils/useDate'
import '../globals.css'
import { WiDaySunny, WiCloudy, WiShowers, WiStormShowers, WiStrongWind, WiSnow, WiFog } from 'react-icons/wi'


export default function WeatherCard({
  temperature,
  windspeed,
  humidity,
  iconString,
  conditions,
  date
}: {
  temperature: number,
  windspeed: number,
  humidity: number,
  iconString: string,
  conditions: string,
  date: string
}) {

  const { time } = useDate()

  // set weather card icon
  const renderIcon = () => {
    
    const iconStyle = "text-7xl"

    if(iconString) {
      if(iconString.toLowerCase().includes('cloud')) {
        return <WiCloudy className={iconStyle}/>
      } else if(iconString.toLowerCase().includes('rain')) {
        return <WiShowers className={iconStyle}/>
      } else if(iconString.toLowerCase().includes('clear')) {
        return <WiDaySunny className={iconStyle}/>
      } else if(iconString.toLowerCase().includes('thunder')) {
        return <WiStormShowers className={iconStyle}/>
      } else if(iconString.toLowerCase().includes('fog')) {
        return <WiFog className={iconStyle}/>
      } else if(iconString.toLowerCase().includes('snow')) {
        return <WiSnow className={iconStyle}/>
      } else if(iconString.toLowerCase().includes('wind')) {
        return <WiStrongWind className={iconStyle}/>
      }
    }
  }

  return (
    <div className="weatherCard w-[13rem] p-4 flex flex-col text-white gap-4 transition ease-in-out bg-blue-500  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 m-3 duration-300 hover:rounded-md">
      <p className="text-center">
        {new Date(date).toLocaleTimeString('en', {weekday: 'long'}).split(" ")[0]}
      </p>
      <hr />
      <div className="w-full flex justify-center items-center flex-1">
        {renderIcon()}
      </div>
      <p className="text-center font-bold">{conditions}</p>
      <p className="text-center font-bold">Temperature: {temperature}&deg;F</p>
      <p className="text-center font-bold">Wind Speed: {windspeed}mph</p>
      <p className="text-center font-bold">Humidity:<br/>{humidity}%</p>
    </div>
  )
}
