import Image from 'next/image'
import {useUserAuth} from "@/app/_utils/auth-context";

export default function WeatherCard(props) {
    const buildFormat = JSON.parse('{"request":{"type":"City","query":"Calgary, Canada","language":"en","unit":"m"},"location":{"name":"Calgary","country":"Canada","region":"Alberta","lat":"51.083","lon":"-114.083","timezone_id":"America\/Edmonton","localtime":"2024-12-04 09:03","localtime_epoch":1733302980,"utc_offset":"-7.0"},"current":{"observation_time":"04:03 PM","temperature":-5,"weather_code":260,"weather_icons":["https:\/\/cdn.worldweatheronline.com\/images\/wsymbols01_png_64\/wsymbol_0007_fog.png"],"weather_descriptions":["Freezing Fog"],"wind_speed":10,"wind_degree":151,"wind_dir":"SSE","pressure":1024,"precip":0,"humidity":93,"cloudcover":60,"feelslike":-9,"uv_index":0,"visibility":0,"is_day":"yes"}}');
    let info;

    if(props.info === undefined) {
        info = buildFormat;
    }
    else {
        if(props.info.success === false) {
            info = buildFormat;
        }
        else {
            info = props.info;
        }
    }

    const location = info.location;
    const current = info.current;
    const weatherIcon = current.weather_icons[0];
    const description = current.weather_descriptions[0]

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

    const timeValue = time();
    const temp = Number(current.temperature);

    function weatherSuggestion() {
        console.log(temp <= 0 && temp > -20)
            if (temp <= 0 && temp > -20) {
                return 'Feeling pretty cold, make sure to wear a jacket';
            }
            else if(temp <= -20 && temp > -40) {
                return 'Very cold out! Bundle up.';
            }
            else if(temp <= -40) {
                return '...You should stay inside';
            }
            else if(temp > 0 && temp <= 10) {
                return 'Pretty Chilly, wear some warm clothes';
            }
            else if(temp > 10 && temp <= 20) {
                return 'Hoodie Weather';
            }
            else if(temp > 20 && temp <= 30) {
                return 'Its nice out! have some fun in the sun';
            }
            else if (temp > 30 <= 40) {
                return 'Really hot, perfect weather to go swimming';
            }
            else if(temp > 40) {
                return 'Too hot, best to be near an AC unit';
            }
            else {
                return 'Internal Error: IDK how you got this????';
            }
    }

    const flavour = weatherSuggestion();

    const { user } = useUserAuth();

    if(user) {
        return (
            <div className="flex flex-col rounded-lg border-2 border-blue-200 bg-blue-300">
                <div className='flex flex-row'>
                    <div className="flex flex-row items-center justify-center gap-2 rounded-l-xl bg-blue-400 p-4">
                        <h1 className='font-extrabold text-5xl bg-blue-200 rounded-3xl p-3 mt-4'>WeatherStorm</h1>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-row'>
                            <div className='m-4 font-bold text-xl'>
                                <p>City: {location.name}, {location.region} </p>
                                <p>Country: {location.country}</p>
                                <p>Time of Observation: {timeValue}</p>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <div className='m-4 font-bold text-xl'>
                                    <p>Temperature: {temp} C</p>
                                    <p>Feels Like: {current.feelslike} C</p>
                                    <p>Wind Speed: {current.wind_speed} KM/H</p>
                                    <p>Wind Direction: {current.wind_dir} {current.wind_degree}°</p>
                                    <p>Humidity: {current.humidity}%</p>
                                    <p>Cloud Cover: {current.cloudcover}%</p>
                                    <p>UV Index: {current.uv_index}</p>
                                </div>
                                <div className='flex flex-col items-center m-4 font-bold'>
                                    <Image className='w-20 h-20' width={80} height={80} src={weatherIcon} alt=''/>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='p-4'>{flavour}</p>
                        </div>
                    </div>

                </div>


            </div>
        );
    }
    else {
        return (
            <div className="flex flex-col rounded-lg border-2 border-blue-200 bg-blue-300">
                <div className='flex flex-row'>
                <div className="flex flex-row items-center justify-center gap-2 rounded-l-xl bg-blue-400 p-4">
                    <h1 className='font-extrabold text-5xl bg-blue-200 rounded-3xl p-3 mt-4'>WeatherStorm</h1>
                </div>
                    <p>Not Logged In</p>
                </div>
            </div>
        );
    }

}
