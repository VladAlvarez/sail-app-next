'use client'
import { useEffect, useState } from 'react';


async function getLogs() {
    const res = await fetch('http://localhost:4000/logs')

    return res.json()
}

export default function LogList() {


    const [logs, setLogs] = useState([])

    useEffect(() => {
        (async () => {
            setLogs(await getLogs())
        })()
    }, [])

    return (
        <>
            {logs.map((log:any) => (
                <div key={log.id} className="card my-5">
                    <p>{log.date + ' ' + log.time + ' ' + log.speed + ' ' + log.avgSpeed + ' ' + log.distance}</p>
                </div>
            ))}
            {logs.length === 0 && (
                <p className="text-center">There are no logs. Better head to the Lake!!</p>
            )}
        </>
    );
}
