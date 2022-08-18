import { getTodayWeather } from "../models/getTodayWeather.js"
import { todayWeather } from "../views/todayWeather.js";

export const todayWeatherController = async (lat, lon) => {
    const weatherCollection = await getTodayWeather(lat, lon)

    // call the view
    todayWeather(weatherCollection)
}