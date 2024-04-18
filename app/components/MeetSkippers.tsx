import Image from "next/image";
import Link from "next/link";

export default function MeetSkippers() {
    return (
        <section className="bg-stone-300 py-8">
            <div className="flex flex-wrap justify-between p-10 ">
                <div className="w-96">
                    <h1 className="text-6xl font-bold">MEET YOUR SKIPPERS</h1>
                    <p className="text-xl pt-3">Each one of our skippers has over 80hrs of sailing experience and is a certified captain by the state. Here’s a chance to get to know them before your voyage.</p>
                </div>
                <div className="flex justify-center w-3/5 gap-4">
                    <div className="w-1/3 relative h-200">
                        <Image
                            src="/captainOne.jpg"
                            layout="fill"
                            objectFit="cover"
                            alt="Captain One"
                        />
                        <Link href="/about-vlad" className="absolute bottom-0">Captain One</Link>
                    </div>
                    <div className="w-1/3 relative h-200">
                        <Image
                            src="/randoPirate.jpg"
                            layout="fill"
                            objectFit="cover"
                            alt="Random Pirate"
                        />
                        <Link href="/about-vlad" className="absolute bottom-0">Random Pirate</Link>
                    </div>
                    <div className="w-1/3 relative h-200">
                        <Image
                            src="/femalePirate.jpg"
                            layout="fill"
                            objectFit="cover"
                            alt="Female Pirate"
                        />
                        <Link href="/about-vlad" className="absolute bottom-0">Female Pirate</Link>
                    </div>
                </div>
            </div>
        </section>    
    )
}
