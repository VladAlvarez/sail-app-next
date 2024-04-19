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
        <form onSubmit={handleSubmit} className="flex gap-3 items-center mt-5">
        <label>
            <input
                className="w-32 text-black h-8"
                type="date"
                required
                onChange={(e) => setDate(e.target.value)}
                value={date} 
                />
        </label>
        <label>
            <input
                className="w-32 text-black"
                required
                type="text"
                onChange={(e) => setTime(e.target.value)}
                value={time} 
                placeholder="Total Time:"
                />
        </label>
        <label>
            <input
                className="w-32 text-black"
                required
                type="text"
                onChange={(e) => setSpeed(e.target.value)}
                value={speed} 
                placeholder="Top Speed:"
                />
        </label>
        <label>
            <input
                className="w-32 text-black"
                required
                onChange={(e) => setAvgSpeed(e.target.value)}
                value={avgSpeed} 
                placeholder="Avg Speed:"
                />
        </label>
        <label>
            <input
                className="w-32 text-black"
                required
                onChange={(e) => setDistance(e.target.value)}
                value={distance} 
                placeholder="Distance:"
            />
        </label>
        <button
        className="btn-primary inline ml-5 text-white h-10 bg-blue-500"
        disabled={isAdding}
        >
            {isAdding && <span>Adding...</span>}
            {!isAdding && <span>+</span>}
        </button>
    </form>
  )
}
