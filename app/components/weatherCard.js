export default function WeatherCard(props) {
    return (
        <div className="flex-col flex w-full h-full rounded-lg border-2 border-blue-200 bg-blue-300">
            <div className="flex flex-row justify-center gap-2 rounded-t-lg bg-blue-400 pt-4 pb-4">
                <h1 className='font-extrabold text-5xl bg-blue-200 rounded-3xl p-3 mt-4 self-center'>WeatherStorm</h1>
            </div>
        </div>
    )
}
