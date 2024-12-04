import WeatherCard from "@/app/components/weatherCard";
import {Get} from "@/app/api/ip-api/route";

export default function Page() {
    Get().then(r => console.log(r.toString()));
    return (
        <main className="flex grow w-dvw h-dvh gap-4">
            <div className='m-4 h-auto w-full'>
                <WeatherCard />
            </div>
        </main>
    );
}
