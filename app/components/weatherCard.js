import Image from 'next/image'

export default function WeatherCard(props) {
    let text = JSON.parse(props.text);

    let location = text.location;
    let current = text.current;
    let weatherIcon = current.weather_icons[0];
    let description = current.weather_descriptions[0]

    function time() {
        let timeHour = current.observation_time.substring(0,2)
        let timeMinutes = current.observation_time.substring(3, 5)
        let am_pm = current.observation_time.substring(6, 8)

        if(timeHour.substring(0, 1) === '0') {
            timeHour = timeHour.substring(1)
        }

        timeHour = Number.parseInt(timeHour)

        if(am_pm === 'PM') {
            timeHour = timeHour + 12;
        }
        else if(am_pm === 'AM' && timeHour === 12) {
            timeHour = 24
        }

        timeHour = timeHour + Number.parseInt(location.utc_offset);

        if(timeHour < 0) {
            timeHour = 24 + timeHour
        }

        if(timeHour > 0 && timeHour < 12) {
            am_pm = 'AM';
        }
        else {
            am_pm = 'PM';
        }

        if(timeHour > 12) {
            timeHour = timeHour - 12;
        }

        return timeHour + ':' + timeMinutes + ' ' + am_pm;
    }

    let timeValue = time();

    return (
        <div className="flex-col flex w-full h-full rounded-lg border-2 border-blue-200 bg-blue-300">
            <div className="flex flex-row justify-center gap-2 rounded-t-lg bg-blue-400 pt-4 pb-4">
                <h1 className='font-extrabold text-5xl bg-blue-200 rounded-3xl p-3 mt-4 self-center'>WeatherStorm</h1>
            </div>
            <div className='m-4 font-bold text-xl'>
                <p>City: {location.name}, {location.region} </p>
                <p>Country: {location.country}</p>
                <p>Time of Observation: {timeValue}</p>
            </div>
            <div className='flex flex-row gap-2'>
                <div className='m-4 font-bold text-xl'>
                    <p>Temperature: {current.temperature} C</p>
                    <p>Feels Like: {current.feelslike} C</p>
                    <p>Wind Speed: {current.wind_speed} KM/H</p>
                    <p>Wind Direction: {current.wind_dir} {current.wind_degree}°</p>
                    <p>Humidity: {current.humidity}%</p>
                    <p>Cloud Cover: {current.cloudcover}%</p>
                    <p>UV Index: {current.uv_index}</p>
                </div>
                <div className='flex flex-col items-center m-4 font-bold'>
                    <Image className='w-20 h-20' width={80} height={80} src={weatherIcon} alt='' />
                    <p>{description}</p>
                </div>

            </div>

        </div>
    )
}