import Image from "next/image";

export default function MeetSkippers() {
    return (
        <section>
            <div className="flex justify-center flex-wrap">
                <div>
                    <h1>MEET YOUR SKIPPERS</h1>
                    <p>Each one of our skippers has over 80hrs of sailing experience and is a certified captain by the state. Here’s a chance to get to know them before your voyage.</p>
                </div>
                <Image 
                    src="/captainOne.jpg"
                    width={300}
                    height={200}
                    alt="Captain One"     
                />
                <Image 
                    src="/randoPirate.jpg"
                    width={300}
                    height={200}
                    alt="Random Pirate"     
                />
                <Image 
                    src="/femalePirate.jpg"
                    width={300}
                    height={200}
                    alt="Female Pirate"     
                />
            </div>
        </section>    
    )
}