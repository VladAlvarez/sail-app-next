"use client"
import { Loader } from "@googlemaps/js-api-loader"
import React from "react"
import { createRef, useEffect, useState } from "react"



export default function Map({ logs }:any) {
    const mapRef = createRef<any>()
    const [googleMap, setGoogleMap] = useState<any>()
    const [viewPort, setViewPort] = useState({
        latitude: 40.327634,
        longitude: -111.764869,
        width: '500px',
        height: '500px',
        zoom: 10
    })
    const initMap = async () => {
        const loader = new Loader({
            apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY!,
            version: "weekly",
        });
        
        const { Map } = await loader.importLibrary("maps");
        const map = new Map(document.getElementById("googleMap"), {
            zoom: 12,
            center: {
                lat: 40.327634,
                lng: -111.764869
            },
            mapId: "12"
        })
        setGoogleMap(map)
    }
    
    useEffect(() => {
        initMap()
    },[])

    const updateMarkers = async () => {
        const { google } = window as any;
        if (!google) return;
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
        logs?.forEach((log:any) => {
            if(log.latitude && log.longitude){
                const marker = new AdvancedMarkerElement({
                position: {
                lat: log.latitude,
                lng: log.longitude,
                },
                map: googleMap,
                title: new Date().toLocaleTimeString(),
            });
            }        
        })
    }

    useEffect(() => {
        if (googleMap)
            updateMarkers()
    },[googleMap, logs])

    return (
        <div id="googleMap" ref={mapRef} className="w-full h-[400px]"></div>  
  )
}




