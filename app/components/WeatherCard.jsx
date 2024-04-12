"use client"
import { useEffect, useState } from "react"
import { useDate } from '../Utils/useDate'

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
    <>
    </>
  )
}
