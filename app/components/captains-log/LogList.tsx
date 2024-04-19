'use client'
import { useEffect, useState } from 'react';

async function getLogs() {
    const res = await fetch('http://localhost:4000/logs');
    return res.json();
}

async function deleteLog(id) {
    await fetch(`http://localhost:4000/logs/${id}`, {
        method: 'DELETE',
    });
}

export default function LogList() {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        (async () => {
            setLogs(await getLogs());
        })();
    }, []);

    const handleDelete = async (id) => {
        await deleteLog(id);
        setLogs(logs.filter(log => log.id !== id));
    };

    return (
        <section>
            <div className='mb-20'>
                {logs.map((log) => (
                    <div key={log.id} className="card m-5 flex gap-2 items-center justify-center">
                        <p className=' text-xl text-black bg-white rounded-md p-2'>
                            {'Date: ' + log.date + ' Time: ' + log.time + ' Top Speed: ' + log.speed + ' Avg. Speed: ' + log.avgSpeed + ' Distance: ' + log.distance}
                        </p>
                            <button onClick={() => handleDelete(log.id)} className='text-red-600 font-bold h-full'>-</button>
                    </div>
                ))}
                {logs.length === 0 && (
                    <p className="text-center">There are no logs. Better head to the Lake!!</p>
                )}
            </div>
        </section>
    );
}
