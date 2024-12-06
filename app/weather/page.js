'use client'
import WeatherCard from "@/app/components/weatherCard";
import {GET} from "@/app/api/weatherstack/route";
import {Suspense, useEffect, useState} from "react";
import {useSearchParams} from "next/navigation";

export default function Page() {
    const params = useSearchParams()
    const [weather , setWeather] = useState();
    useEffect(() => {
        const getWeather = async () => {
            const data = await GET();
            setWeather(data);
        };
        getWeather();
    }, []);

    return (
        <Suspense>
            <main className="flex grow w-dvw h-dvh gap-4">
                <div className='m-8 h-auto w-full'>
                    <WeatherCard info={weather} user={params.get("user")}/>
                </div>
            </main>
        </Suspense>
    );
}

