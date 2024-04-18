import CreateForm from "./CreateForm";
import { StateContextProvider } from '../../Context';

export default function CreateSchedule() {
    return (
        <StateContextProvider>
        <main className="bg-white">
        <h2 className="text-center">ENTER DETAILS</h2>
        <CreateForm />
        </main>
        </StateContextProvider>
    )
}

