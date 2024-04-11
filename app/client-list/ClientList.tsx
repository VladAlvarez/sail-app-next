'use client'
import { useEffect, useState } from 'react';


async function getClient() {
    const res = await fetch('http://localhost:4000/details')

    return res.json()
}

export default function ClientList() {


    const [clients, setClients] = useState([])

    useEffect(() => {
        (async () => {
            setClients(await getClient())
        })()
    }, [])

    const formatDate = (isoDate: any) => {
        const date = new Date(isoDate);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    }

    return (
        <>
            {clients.map((client:any) => (
                <div key={client.name} className="card my-5">
                    <p>{
                        client.name + ' ' + 
                        client.email + ' ' + 
                        client.number + ' ' + 
                        client.body + ' ' + 
                        client.time + ' ' +
                        formatDate(client.date)}</p>
                </div>
            ))}
            {clients.length === 0 && (
                <p className="text-center">There are no clients</p>
            )}
        </>
    );
}

