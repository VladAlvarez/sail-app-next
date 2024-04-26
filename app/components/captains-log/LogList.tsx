import React from "react";

export default function LogList({logs, handleDelete}:any) {
   

    return (
        <section>
            <div className='mb-20'>
                {logs.map((log: any) => (
                    <div key={log.id} className="card m-5 flex gap-2 items-center justify-center">
                        <p className=' text-xl text-black bg-white rounded-md p-2'>
                            {'Date: ' + log.date + ' Time: ' + log.time + ' Top Speed: ' + log.speed + ' Avg. Speed: ' + log.avgSpeed + ' Distance: ' + log.distance}
                        </p>
                            <button onClick={() => handleDelete(log.id)} className='text-white font-bold h-[44px]text-center p-2 bg-red-600 rounded-lg w-10 text-center'>-</button>
                    </div>
                ))}
                {logs.length === 0 && (
                    <p className="text-center">There are no logs. Better head to the Lake!!</p>
                )}
            </div>
        </section>
    );
}
