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

  useEffect(() => {
    first
  
    return () => {
      second
    }
  }, [third])
  

  return (
    <>
    </>
  )
}
