import CreateForm from "./CreateForm";
import { StateContextProvider } from '../../Context';

export default function CreateSchedule() {
    return (
        <StateContextProvider>
        <main className="bg-white py-12">
        <CreateForm />
        </main>
        </StateContextProvider>
    )
}

