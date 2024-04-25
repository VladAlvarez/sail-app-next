"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar"
import { WeatherItemType, useStateContext } from "../../Context";
import WeatherCard from '../WeatherCard'
import { CalendarDays, Clock, PencilIcon } from "lucide-react";
import emailjs from 'emailjs-com';
import React from "react";

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
    }, []);

    const getTime = () => {
        const timeList = [];
        for (let i = 10; i <= 12; i++) {
            timeList.push({
                time: i + ':00 AM'
            })
            timeList.push({
                time: i + ':30 AM'
            })
        }
        for (let i = 1; i <= 6; i++) {
            timeList.push({
                time: i + ':00 PM'
            })
            timeList.push({
                time: i + ':30 PM'
            })
        }
        setTimeSlot(timeList);
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsSending(true);

        const details = {
            name, email, number, body, time: selectedTimeSlot, date
        };

        emailjs.send('service_28a13qk', 'service_28a13qk', details, 'i4aO7S9ANfmqafHFH')
            .then((response) => {
                console.log('Email sent successfully:', response);
                setIsSending(false);
                router.refresh();
                router.push('/client-list');
            })
            .catch((error) => {
                console.error('Email sending failed:', error);
                setIsSending(false);
            });

        const res = await fetch('http://localhost:4000/details', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(details)
        });

        if (res.status === 201) {
            router.refresh();
            router.push('/client-list');
        }
    }

    const isPastDay = (day: Date): boolean => {
        return day < new Date();
    }

    const { weather }:any = useStateContext();


    return (
        <div>
            <div className="flex flex-col items-center w-screen">
                <h2 className="md:text-3xl md:pb-12 text-xl pb-5">Check the weather before you come</h2>
                <div className="flex overflow-x-scroll">
                    <div className="flex md:flex-wrap flex-nowrap gap-2 justify-center pb-10">
                        {
                            (weather).map((weatherItem: WeatherItemType, key: number) => (
                                <WeatherCard
                                    key={key}
                                    date={weatherItem?.dt_txt}
                                    windspeed={weatherItem?.wind?.speed}
                                    humidity={weatherItem?.main?.humidity}
                                    temperature={weatherItem?.main?.temp}
                                    iconString={weatherItem?.weather?.[0]?.description}
                                    conditions={weatherItem?.weather?.[0]?.description}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="w-32">
                <div className=" mb-12 flex flex-wrap justify-center md:flex gap-10 mt-5 p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700
                transition ease-in-out hover:-translate-y-1 hover:scale-110 m-3 duration-300">
                    <div className="flex flex-col gap-3 items-baseline ">
                        <h2 className="flex gap-2 items-center">
                            <CalendarDays className="text-blue-500" />
                            SELECT DATE
                        </h2>
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={isPastDay}
                            className="rounded-md border"
                        />
                    </div>
                    <div className="mt-3 md:mt-0">
                        <h2 className="flex gap-2 items-center mb-3">
                            <Clock className="text-blue-500" />
                            SELECT TIME
                        </h2>
                        <div className="grid grid-cols-3 gap-3 md:gap-2 w-full overflow-hidden">
                            {timeSlot?.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedTimeSlot(item.time)}
                                    className={`w-20 py-2 md:p-2 border rounded-md cursor-pointer text-center hover:bg-blue-500 hover:text-white md:w-40 ${item.time == selectedTimeSlot && 'bg-blue-500 text-white'}`}
                                >
                                    {item.time}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="gap-3 mt-5 p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700
                transition ease-in-out hover:-translate-y-1 hover:scale-110 m-3 duration-300">
                    <div className="text-center md:items-center flex justify-center flex-col">
                        <h2 className="mt-6 mb-3 flex gap-2 items-center">
                            <PencilIcon className="text-blue-500" />
                            ENTER DETAILS</h2>
                        <label>
                            <span>Name:</span>
                            <input
                                required
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                className="border-solid border border-slate-300 rounded-md "
                            />
                        </label>
                        <label>
                            <span>Email:</span>
                            <input
                                required
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                className="border-solid border border-slate-300 rounded-md"
                            />
                        </label>
                        <label>
                            <span>Number:</span>
                            <input
                                required
                                type="tel"
                                onChange={(e) => setNumber(e.target.value)}
                                value={number}
                                className="border-solid border border-slate-300 rounded-md"
                            />
                        </label>
                        <label>
                            <span>Please share anything that will help prepare four our meeting:</span>
                            <textarea
                                required
                                onChange={(e) => setBody(e.target.value)}
                                value={body}
                                className="border-solid border border-slate-300 rounded-md"
                            />
                        </label>
                        <button
                            className="bg-blue-500 text-white rounded-full px-10 shadow-2xl py-2 mt-5"
                            disabled={isSending}
                        >
                            {isSending && <span>Sending...</span>}
                            {!isSending && <span>Schedule Event</span>}
                        </button>
                    </div>
                </div>
            </form>
        </div >
    )
}
