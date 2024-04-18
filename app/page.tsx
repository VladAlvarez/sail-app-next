import Head from "next/head";
import Link from "next/link";
import CreateSchedule from "./components/schedule/CreateSchedule";
import MeetSkippers from "./components/MeetSkippers";
import Contact from "./components/Contact"; 
import CaptainsLog from "./components/captains-log/CaptainsLog";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Sail Utah</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

        <Hero />
        <div id="first-section">
          <CreateSchedule />
        </div>
        <MeetSkippers />
        <div id="third-section">
          <Contact />
        </div>
        <div id="fourth-section">
          <CaptainsLog />
        </div>
    </main>
  );
}
