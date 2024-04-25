'use client'
import React, { useEffect, useState } from 'react';

async function getClient() {
    const res = await fetch('http://localhost:4000/details')
    return res.json()
}

async function deleteClient(id) {
    await fetch(`http://localhost:4000/details/${id}`, {
        method: 'DELETE',
    });
}

export default function ClientList() {
    const [clients, setClients] = useState([]);
    const [signUpSuccess, setSignUpSuccess] = useState(false);

    useEffect(() => {
        (async () => {
            setClients(await getClient());
        })();
    }, []);

    useEffect(() => {
        if (signUpSuccess) {
            alert('Sign up successful!');
        }
    }, [signUpSuccess]);

    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    }

    const handleDelete = async (id) => {
        await deleteClient(id);
        setClients(clients.filter(client => client.id !== id));
    }

    return (
        <section className='pt-32 p-12 h-screen'>
            {clients.map((client: any) => (
                <div key={client.id} className="card">
                    <p>
                        <div className='flex flex-col content-around flex-wrap text-center p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3
                         transition ease-in-out hover:-translate-y-1 hover:scale-110 m-3 duration-300 p-3'>
                            {client.name + ' ' +
                                client.email + ' ' +
                                client.number + ' ' +
                                client.body + ' ' +
                                client.time + ' ' +
                                formatDate(client.date)}
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDelete(client.id)}>Delete</button>
                        </div>
                    </p>
                </div>
            ))}
            {clients.length === 0 && (
                <p className="text-center">There are no clients</p>
            )}
        </section>
    );
}
