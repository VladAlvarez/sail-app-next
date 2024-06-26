
"use client"
import { createRef, useEffect } from "react"
import { useHash } from "../Utils/useHash"
import React from "react"


export default function Scroll({ children, id }: any) {
    const divRef = createRef<any>()
    const hash = useHash()

    useEffect(() => {     
        if (hash === id) {
            setTimeout(() => {
                divRef.current?.scrollIntoView(true)
            },700)
        }
    },[divRef, id, hash])

    return (
        <div id={id} ref={divRef} className="scroll-mt-[98px]">{children}</div>
    )
}