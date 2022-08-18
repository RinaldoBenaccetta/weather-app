import { getTodayWeather } from "../models/getTodayWeather.js"
import { todayWeather } from "../views/todayWeather.js";

/**
 * Get weather for next 24hours according to provided coordinates and show them in the DOM.
 * 
 * @param {Float} lat - The latitude
 * @param {Float} lon - The longitude
 */
export const todayWeatherController = async (lat, lon) => {
    const weatherCollection = await getTodayWeather(lat, lon)

    // call the view
    todayWeather(weatherCollection)
}