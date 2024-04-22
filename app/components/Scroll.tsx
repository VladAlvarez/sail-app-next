
"use client"
import { createRef, useEffect } from "react"
import useHash from "@/app/Utils/useHash"

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
        <div id={id} ref={divRef}>{children}</div>
    )
}