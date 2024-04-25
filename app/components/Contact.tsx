import Image from "next/image"
import Red from "../../public/suzy-red.jpg"
import React from "react"

export default function Contact() {
  return (
    <main className="bg-primary h-full w-full	">
        <div className="md:flex justify-between">
            <div>
                <Image
                    className="pb-0 mb-0 border-8 border-primary"
                    src={Red}
                    alt='Suzy Red'
                    // width={500}
                    quality={100}
                    placeholder='blur'
                    // height="100vh"
                    // objectFit="cover"
                    // layout="fill"
                />
            </div>
            <div className="text-center text-white pb-10 md:pr-24">
                <h1 className="text-4xl font-bold mt-20">SEE YOU SOON</h1>
                <h3 className="font-bold md:mt-20 mt-10">PHONE NUMBER</h3>
                <h3>(801) 123-4567</h3>
                <h3 className="font-bold mt-10">EMAIL ADDRESS</h3>
                <h3>hello@reallygreatsite.com</h3>
                <h3 className="font-bold mt-10">LINDON MARINA</h3>
                <h3>123 Anywhere St. Any City, UT 12345</h3>
            </div>
        </div>
    </main>
  )
}
