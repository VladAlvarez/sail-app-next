import CreateForm from "./CreateForm";
import { StateContextProvider } from '../../Context';
import React from "react";

export default function CreateSchedule() {
    return (
        <StateContextProvider>
        <main className="bg-white py-12">
        <CreateForm />
        </main>
        </StateContextProvider>
    )
}

