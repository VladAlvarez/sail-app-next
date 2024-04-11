"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function CreateLog() {
    const router = useRouter()

    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [speed, setSpeed] = useState('')
    const [avgSpeed, setAvgSpeed] = useState('')
    const [distance, setDistance] = useState('')
    const [isAdding, setIsAdding] = useState(false)
  
    const handleSubmit = async (e:any) => {
        e.preventDefault()
        setIsAdding(true)

        const logs = {
            date, time, speed, avgSpeed, distance
    }

        const res = await fetch('http://localhost:4000/logs', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(logs)
        })

        if (res.status === 201) {
                router.refresh()
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
        <label>
            <span>Date:</span>
            <input
                className="w-20"
                required
                type="text"
                onChange={(e) => setDate(e.target.value)}
                value={date} 
                />
        </label>
        <label>
            <span>Total Time:</span>
            <input
                className="w-20"
                required
                type="text"
                onChange={(e) => setTime(e.target.value)}
                value={time} 
                />
        </label>
        <label>
            <span>Top Speed:</span>
            <input
                className="w-20"
                required
                type="text"
                onChange={(e) => setSpeed(e.target.value)}
                value={speed} 
                />
        </label>
        <label>
            <span>Avg Speed:</span>
            <input
                className="w-20"
                required
                onChange={(e) => setAvgSpeed(e.target.value)}
                value={avgSpeed} 
                />
        </label>
        <label>
            <span>Distance:</span>
            <input
                className="w-20"
                required
                onChange={(e) => setDistance(e.target.value)}
                value={distance} 
            />
        </label>
        <button
        className="btn-primary inline ml-5"
        disabled={isAdding}
        >
            {isAdding && <span>Adding...</span>}
            {!isAdding && <span>+</span>}
        </button>
    </form>
  )
}
