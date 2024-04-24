import Link from "next/link";
import React from "react";

export default function Hero() {
    return (
        <section className="">
            <div className="flex justify-center text-white">
              <h2 className="mt-40">LINDON MARINA</h2>
            </div>
            <div className="flex justify-center mt-40 text-white">
              <h1 className="text-4xl md:text-6xl font-bold">SAIL UTAH LAKE</h1>
            </div>
            
            <div className="flex justify-center mt-12 mb-48">
              <Link href="#first-section">
                <button className="btn-primary text-black sailButton">Sail with Us</button>
              </Link>
            </div>
        </section>
    )
}