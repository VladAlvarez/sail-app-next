"use client"

import Head from "next/head"
import { useState } from "react"
import ReactMapGL from "react-map-gl"

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
    <Head>
        <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css" />
    </Head>
    <ReactMapGL 
        {...viewPort}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
    >
        markers here
    </ReactMapGL>
    </>
  )
}


