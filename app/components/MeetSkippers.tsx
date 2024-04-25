import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MeetSkippers() {
    return (
        <section className="bg-stone-300 py-8">
            <div className="flex flex-wrap justify-between p-10 ">
                <div className="w-96">
                    <h1 className="text-6xl font-bold text-center md:text-left">MEET YOUR SKIPPERS</h1>
                    <p className="text-xl pt-3 text-center md:text-left">Each one of our skippers has over 80hrs of sailing experience and is a certified captain by the state. Here’s a chance to get to know them before your voyage.</p>
                </div>
                <div className="flex justify-center items-center flex-wrap md:flex-nowrap md:w-3/5 gap-4">
                    <div className="md:w-1/3 w-64 relative mt-5 md:mt-0" style={{height: "200px"}}>
                        <div className="absolute inset-0 shadow-inner border-4 shadow-2xl  transition ease-in-out hover:-translate-y-1 hover:scale-110 m-3 duration-300">
                            <Image
                                src="/captainOne.jpg"
                                layout="fill"
                                objectFit="cover"
                                alt="Captain One"
                            />
                        </div>
                        {/* <Link href="/about-vlad" className="absolute bottom-0">Captain One</Link> */}
                    </div>
                    <div className="md:w-1/3 w-64 relative" style={{height: "200px"}}>
                        <div className="absolute inset-0 shadow-inner border-4 shadow-2xl  transition ease-in-out hover:-translate-y-1 hover:scale-110 m-3 duration-300">
                            <Image
                                src="/randoPirate.jpg"
                                layout="fill"
                                objectFit="cover"
                                alt="Random Pirate"
                            />
                        </div>
                        {/* <Link href="/about-vlad" className="absolute bottom-0">Captain One</Link> */}
                    </div>
                    <div className="md:w-1/3 w-64 relative" style={{height: "200px"}}>
                        <div className="absolute inset-0 shadow-inner border-4 shadow-2xl  transition ease-in-out hover:-translate-y-1 hover:scale-110 m-3 duration-300">
                            <Image
                                src="/femalePirate.jpg"
                                layout="fill"
                                objectFit="cover"
                                alt="Female Pirate"
                            />
                        </div>
                        {/* <Link href="/about-vlad" className="absolute bottom-0">Captain One</Link> */}
                    </div>
                </div>
            </div>
        </section>    
    )
}
