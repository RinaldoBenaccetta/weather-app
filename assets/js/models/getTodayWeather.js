import { apiQuery } from "./apiQuery.js";
import { formatHour } from "./formatHour.js";
import { formatTemp } from "./formatTemp.js";

export const getTodayWeather = async (lat, lon) => {
    const response = await apiQuery(lat, lon)

    if (response) return parseResponse(response)
}

const parseResponse = (response) => {
    // Get the 8 first object :
    // each object represent 3 hours, so 8 * 3 = 24 hours
    const todayArray = response.list.slice(0, 8)

    const city = response.city

    console.log(todayArray)
    console.log(city);

    const formatedArray = todayArray.map((day) => {
        return {
            hour: formatHour((day.dt - city.timezone) * 1000),// provided timestamp is in unix
            icon: '',
            state: day.weather[0].description,
            temp: formatTemp(day.main.temp),
            feel: formatTemp(day.main.feels_like),
        }
    })

    return formatedArray
}
