import Link from "next/link";

export default function Hero() {
    return (
        <section>
            <div className="flex justify-center mt-10 text-white">
              <h2>LINDON MARINA</h2>
            </div>
            <div className="flex justify-center mt-60 text-white">
              <h1 className="text-6xl font-bold">SAIL UTAH LAKE</h1>
            </div>
            
            <div className="flex justify-center mt-12 mb-48">
              <Link href="#first-section">
                <button className="btn-primary text-black">Sail with Us</button>
              </Link>
            </div>
        </section>
    )
}