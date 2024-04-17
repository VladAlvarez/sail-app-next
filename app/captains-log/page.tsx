import CreateLog from "./CreateLog"
import LogList from "./LogList"
import Map from "../components/map"

export default function CaptainsLog() {
    return (
        <section>
            <div className="flex flex-col items-center bg-stone-600 text-white">
                <h1 className="text-6xl font-bold mt-16 text-white">Captain&apos;s Log</h1>
                <p className="mt-5 mb-10 text-lg text-white">See Where Our Boats Have Been</p>
                <Map />
                <CreateLog />
                <LogList />
            </div>
        </section>
    )
}