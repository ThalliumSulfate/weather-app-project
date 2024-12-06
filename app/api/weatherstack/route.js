'use server'
import * as HTTP from "node:http";
import {headers} from "next/headers";

export async function GET() {
    try {
        const headerList = await headers()
        const ip = headerList.get('x-forwarded-for')
        const ipRes = await fetch('https://ipinfo.io/' + ip + '?token=' + process.env.IPINFO_TOKEN);
        const data = await ipRes.json();

        console.log(data)

        const url = 'http://api.weatherstack.com/current?access_key=' + process.env.WEATHER_STACK_API_KEY + '&query=' + data.city;
        const options = {
            method: 'GET'
        };

        let response = await fetch(url, options);
        let result = await response.json();
        if(response.status === 200) {
            return result;
        }
    }
    catch (error) {
        console.error(error);
    }

}
