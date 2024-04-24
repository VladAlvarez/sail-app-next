import Head from "next/head";
import Link from "next/link";
import CreateSchedule from "./components/schedule/CreateSchedule";
import MeetSkippers from "./components/MeetSkippers";
import Contact from "./components/Contact"; 
import CaptainsLog from "./components/captains-log/CaptainsLog";
import Hero from "./components/Hero";
import Scroll from "./components/Scroll";
import React from "react";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Sail Utah</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

        <Hero />
        <Scroll id="first-section">
          <CreateSchedule />
        </Scroll>
        <MeetSkippers />
        <Scroll id="third-section">
          <Contact />
        </Scroll>
        <Scroll id="fourth-section">
          <CaptainsLog />
        </Scroll>
    </main>
  );
}
