"use client"
import Script from "next/script"
import { useState } from "react"



export default function Map() {
    const [viewPort, setViewPort] = useState({
        latitude: 40.327634,
        longitude: -111.764869,
        width: '500px',
        height: '500px',
        zoom: 10
    })
    return (
    <>
    <Script
        id="googleMaps"
        async
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY}&callback=console.debug&libraries=maps,places,marker&v=beta`}
        >
    </Script>
    <div className="w-full h-[400px]">
{/* @ts-ignore */}
        <gmp-map
            center={`${viewPort.latitude}, ${viewPort.longitude}`}
            zoom={viewPort.zoom}>
{/* @ts-ignore */}
        </gmp-map>
    </div>
    </>
  )
}


