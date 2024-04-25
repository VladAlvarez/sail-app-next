"use client"
import { useRouter } from "next/navigation"
import React from "react"
import { useState } from "react"


export default function CreateLog({onSubmit}:any) {
    const router = useRouter()

    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [speed, setSpeed] = useState('')
    const [avgSpeed, setAvgSpeed] = useState('')
    const [distance, setDistance] = useState('')
    const [latitude, setLatitude] =useState<string | number>('')
    const [longitude, setLongitude] =useState<string | number>('')
    const [isAdding, setIsAdding] = useState(false)
  
    const handleSubmit = async (e:any) => {
        e.preventDefault()
        setIsAdding(true)

        const logs = {
            date, time, speed, avgSpeed, distance, latitude, longitude
    }

        const res = await fetch('http://localhost:4000/logs', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(logs)
        })
        const log = await res.json();
        

        if (res.status === 201) {
                onSubmit(log)
                setIsAdding(false)
        }
    }
    
    return (
        <form onSubmit={handleSubmit} className="md:flex flex-wrap md:gap-3 items-center mt-5 grid">
        <label>
            <input
                className="md:w-32 w-64 text-black h-8"
                type="date"
                required
                onChange={(e) => setDate(e.target.value)}
                value={date} 
                />
        </label>
        <label>
            <input
                className="md:w-32 w-64 text-black"
                required
                type="text"
                onChange={(e) => setTime(e.target.value)}
                value={time} 
                placeholder="Total Time:"
                />
        </label>
        <label>
            <input
                className="md:w-32 w-64 text-black"
                required
                type="text"
                onChange={(e) => setSpeed(e.target.value)}
                value={speed} 
                placeholder="Top Speed:"
                />
        </label>
        <label>
            <input
                className="md:w-32 w-64 text-black"
                required
                onChange={(e) => setAvgSpeed(e.target.value)}
                value={avgSpeed} 
                placeholder="Avg Speed:"
                />
        </label>
        <label>
            <input
                className="md:w-32 w-64 text-black"
                required
                onChange={(e) => setDistance(e.target.value)}
                value={distance} 
                placeholder="Distance:"
            />
        </label>
        <label>
            <input
                className="md:w-32 w-64 text-black"
                type="number"
                required
                onChange={(e) => setLatitude(parseFloat(e.target.value))}
                value={latitude} 
                placeholder="Latitude:"
            />
        </label>
        <label>
            <input
                className="md:w-32 w-64 text-black"
                required
                type="number"
                onChange={(e) => setLongitude(parseFloat(e.target.value))}
                value={longitude} 
                placeholder="Longitude:"
            />
        </label>
        <button
        className="btn-primary inline md:ml-5 text-white h-10 bg-blue-500 md:p-2 rounded-md px-12 "
        disabled={isAdding}
        >
            {isAdding && <span>Adding...</span>}
            {!isAdding && <span>+</span>}
        </button>
    </form>
  )
}
