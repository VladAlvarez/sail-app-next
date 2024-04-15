"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar"
import { WeatherItemType, useStateContext } from "../Context";
import WeatherCard from '../components/WeatherCard.tsx'

export default function CreateForm() {
    const router = useRouter()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [body, setBody] = useState('')
    const [isSending, setIsSending] = useState(false)
    const [timeSlot, setTimeSlot] = useState<{ time: string }[]>([]);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState('')
    const [date, setDate] = useState<Date | undefined>(new Date())

    useEffect(() => {
        getTime();
    },[])
    
    const getTime = () => {
        const timeList = [];
        for (let i = 10; i <=12; i++) {
            timeList.push({
                time: i + ':00 AM'
            })
            timeList.push({
                time: i + ':30 AM'
            })
        }
        for (let i = 1; i <=6; i++) {
            timeList.push({
                time: i + ':00 PM'
            })
            timeList.push({
                time: i + ':30 PM'
            })
        }
        setTimeSlot(timeList)
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setIsSending(true)

        const details = {
            name, email, number, body, time: selectedTimeSlot, date
        }

        const res = await fetch('http://localhost:4000/details', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(details)
        })

        if (res.status === 201) {
            router.refresh()
            router.push('/client-list')
        }
    }

    const isPastDay = (day: Date): boolean => {
        return day<new Date();
    }

    const { weather, thisLocation, values } = useStateContext();
    console.log(weather);
    

    return (
        <div>
            {
                (weather).map((weatherItem: WeatherItemType, key: number) => (
                    <WeatherCard
                        key={key}
                        windspeed={weatherItem?.wind?.speed}
                        humidity={weatherItem?.main?.humidity}
                        temperature={weatherItem?.main?.temp}
                        iconString={weatherItem?.weather?.[0]?.description}
                        conditions={weatherItem?.weather?.[0]?.description}
                    />
                ))
            }

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
                    <div className="flex flex-col gap-3 items-baseline">
                        <p className="flex gap-2 items-center">
                            Select Date
                        </p>
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={isPastDay}
                            className="rounded-md border"
                        />
                    </div>
                    <div className="mt-3">
                        {timeSlot?.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedTimeSlot(item.time)}
                                className={`p-2 border rounded-md cursor-pointer text-center hover:bg-blue-500 hover:text-white w-40 ${item.time==selectedTimeSlot&&'bg-blue-500 text-white'}`}
                            >
                                {item.time}
                            </button>
                        ))}
                    </div>
                </div>
                <label>
                    <span>Name:</span>
                    <input
                        required
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </label>
                <label>
                    <span>Email:</span>
                    <input
                        required
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>
                <label>
                    <span>Number:</span>
                    <input
                        required
                        type="text"
                        onChange={(e) => setNumber(e.target.value)}
                        value={number}
                    />
                </label>
                <label>
                    <span>Please share anything that will help prepare four our meeting:</span>
                    <textarea
                        required
                        onChange={(e) => setBody(e.target.value)}
                        value={body}
                    />
                </label>
                <button
                className="btn-primary"
                disabled={isSending}
                >
                    {isSending && <span>Sending...</span>}
                    {!isSending && <span>Schedule Event</span>}
                </button>
            </form>
        </div>
    )
}
