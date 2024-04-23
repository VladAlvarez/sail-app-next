"use client"
import { useDate } from '../Utils/useDate'
import '../globals.css'
import { WiDaySunny, WiCloudy, WiShowers, WiStormShowers, WiStrongWind, WiSnow, WiFog } from 'react-icons/wi'


export default function WeatherCard({
  temperature,
  windspeed,
  humidity,
  iconString,
  conditions
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
    
    const iconStyle = "text-4xl"

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
    return <WiDaySunny/>
  }

  return (
    <div className="weatherCard w-[10rem] p-4 flex flex-col text-white">
      <p className="text-center">
        {new Date(time).toLocaleTimeString('en', {weekday: 'long'}).split(" ")[0]}
      </p>
      <hr />
      <div className="w-full flex justify-center items-center flex-1">
        {renderIcon()}
      </div>
      <p className="text-center font-bold">{temperature}&deg;F</p>
      <p className="text-center font-bold">{windspeed}</p>
      <p className="text-center font-bold">{humidity}</p>
      <p className="text-center font-bold">{conditions}</p>
    </div>
  )
}
