import WeatherCard from "@/app/components/weatherCard";
import {GET} from "@/app/api/weatherstack/route";

export default async function Page() {
    let weather = '{"request":{"type":"City","query":"Calgary, Canada","language":"en","unit":"m"},"location":{"name":"Calgary","country":"Canada","region":"Alberta","lat":"51.083","lon":"-114.083","timezone_id":"America\/Edmonton","localtime":"2024-12-04 09:03","localtime_epoch":1733302980,"utc_offset":"-7.0"},"current":{"observation_time":"04:03 PM","temperature":-5,"weather_code":260,"weather_icons":["https:\/\/cdn.worldweatheronline.com\/images\/wsymbols01_png_64\/wsymbol_0007_fog.png"],"weather_descriptions":["Freezing Fog"],"wind_speed":10,"wind_degree":151,"wind_dir":"SSE","pressure":1024,"precip":0,"humidity":93,"cloudcover":60,"feelslike":-9,"uv_index":0,"visibility":0,"is_day":"yes"}}'
    let ipInfo = await GET();
    console.log(ipInfo);

    return (
        <main className="flex grow w-dvw h-dvh gap-4">
            <div className='m-8 h-auto w-full'>
                <WeatherCard text={weather} ip={ipInfo}/>
            </div>
        </main>
    );
}

