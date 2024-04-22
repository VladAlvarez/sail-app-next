"use client"
import { useEffect, useState } from "react";
import CreateLog from "./CreateLog"
import LogList from "./LogList"
import Map from "./map"

async function getLogs() {
    const res = await fetch('http://localhost:4000/logs');
    return res.json();
}

async function deleteLog(id:any) {
    await fetch(`http://localhost:4000/logs/${id}`, {
        method: 'DELETE',
    });
}

export default function CaptainsLog() {
    const [logs, setLogs] = useState<any[]>([]);

    useEffect(() => {
        (async () => {
            setLogs(await getLogs());
        })();
    }, []);

    const handleDelete = async (id:any) => {
        await deleteLog(id);
        setLogs(logs.filter(log => log.id !== id));
    };

    const onSubmit = (log:any) => { 
        setLogs([
            ...logs, 
            log
        ])
    }

    return (
        <section>
            <div className="flex flex-col items-center bg-stone-600 text-white">
                <h1 className="text-6xl font-bold mt-16 text-white">Captain&apos;s Log</h1>
                <p className="mt-5 mb-10 text-lg text-white">See Where Our Boats Have Been</p>
                <Map logs={logs} />
                <CreateLog onSubmit={onSubmit} />
                <LogList logs={logs} handleDelete={handleDelete} />
            </div>
        </section>
    )
}