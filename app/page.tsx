"use client"

import Head from "next/head";
import CreateSchedule from "./components/schedule/CreateSchedule";
import MeetSkippers from "./components/MeetSkippers";
import Contact from "./components/Contact"; 
import CaptainsLog from "./components/captains-log/CaptainsLog";
import Hero from "./components/Hero";
import Scroll from "./components/Scroll";
import React from "react";
import Navbar from "./components/navbar";
import { AuthProvider } from "./contexts/authContext";

export default function Home() {
  return (
    <main className="w-dvw">
      <Head>
        <title>Sail Utah</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AuthProvider>
        <Navbar />
      </AuthProvider>
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
