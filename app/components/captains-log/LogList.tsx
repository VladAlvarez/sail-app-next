import React from "react";

export default function LogList({ logs, handleDelete }: any) {
    return (
        <section>
            <div className='mb-20 overflow-x-auto w-screen flex md:justify-center items-center px-12 p-8'>
                {logs.length > 0 ? (
                    <table className="bg-white text-black text-xl gap-5 rounded-lg">
                        <thead>
                            <tr>
                                <th className="border-b-[1px] border-gray-300 border-r-[1px] p-2 flex-wrap">Date:</th>
                                <th className="border-b-[1px] border-gray-300 border-r-[1px] p-2">Time:</th>
                                <th className="border-b-[1px] border-gray-300 border-r-[1px] p-2">Top Speed:</th>
                                <th className="border-b-[1px] border-gray-300 border-r-[1px] p-2">Avg Speed:</th>
                                <th className="border-b-[1px] border-gray-300 border-r-[1px] p-2">Distance:</th>
                                <th className="border-b-[1px] border-gray-300 border-r-[1px] p-2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {logs.map((log: any) => (
                                <tr key={log.id}>
                                    <td className="border-r-[1px] border-gray-300 p-2">{log.date}</td>
                                    <td className="border-r-[1px] border-gray-300 p-2">{log.time}</td>
                                    <td className="border-r-[1px] border-gray-300 p-2">{log.speed}</td>
                                    <td className="border-r-[1px] border-gray-300 p-2">{log.avgSpeed}</td>
                                    <td className="border-r-[1px] border-gray-300 p-2">{log.distance}</td>
                                    <td className="border-t-[1px] border-gray-300 p-2">
                                        <button onClick={() => handleDelete(log.id)} className='text-white font-bold h-[44px] text-center p-2 bg-red-600 rounded-lg w-10'>-</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-center">There are no logs. Better head to the Lake!!</p>
                )}
            </div>
        </section>
    );
}
