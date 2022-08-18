import { getWeather } from "../models/getWeather.js"
import { todayWeather } from "../views/todayWeather.js";

/**
 * Get weather for next 24hours according to provided coordinates and show them in the DOM.
 * 
 * @param {Float} lat - The latitude
 * @param {Float} lon - The longitude
 */
export const weatherController = async (lat, lon) => {
    const weatherCollection = await getWeather(lat, lon)

    // call the today weather view
    todayWeather(weatherCollection.today)
}