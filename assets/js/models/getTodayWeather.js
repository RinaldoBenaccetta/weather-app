import { apiQuery } from "./apiQuery.js";
import { getHour } from "./getHour.js";

export const getTodayWeather = async (lat, lon) => {
    const response = await apiQuery(lat, lon)

    if (response) return parseResponse(response)
}

const parseResponse = (response) => {
    // Get the 8 first object :
    // each object represent 3 hours, so 8 * 3 = 24 hours
    const todayArray = response.list.slice(0, 8)

    const formatedArray = todayArray.map((day) => {
        return {
            hour: getHour(day.dt),
            icon: '',
            state: day.weather[0].description,
            temp: day.main.temp,
            feel: day.main.feels_like,
        }
    })

    return formatedArray
}
