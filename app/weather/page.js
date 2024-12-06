import WeatherCard from "@/app/components/weatherCard";
import {GET} from "@/app/api/weatherstack/route";

export default async function Page() {
    let weather;

    weather = await GET()

    return (
        <main className="flex grow w-dvw h-dvh gap-4">
            <div className='m-8 h-auto w-full'>
                <WeatherCard text={weather}/>
            </div>
        </main>
    );
}

