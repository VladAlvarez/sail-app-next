import Head from "next/head";
import Link from "next/link";
import CreateSchedule from "./components/schedule/CreateSchedule";
import MeetSkippers from "./components/MeetSkippers";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Sail Utah</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

        <div className="flex justify-center mt-10 ">
          <h2>LINDON MARINA</h2>
        </div>
        <div className="flex justify-center mt-60">
          <h1 className="text-6xl font-bold">SAIL UTAH LAKE</h1>
        </div>
        
        <div className="flex justify-center my-8">
          <Link href="/schedule">
            <button className="btn-primary text-black">Sail with Us</button>
          </Link>
        </div>
        <CreateSchedule id="first-section" />
        <MeetSkippers />
    </main>
  );
}
