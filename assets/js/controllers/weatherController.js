import { getWeather } from "../models/getWeather.js"
import { todayWeather } from "../views/todayWeather.js"
import { flushMainContainer } from "../views/flushMainContainer.js"

/**
 * Get weather for next 24hours according to provided coordinates and show them in the DOM.
 * 
 * @param {String} city
 */
export const weatherController = async (city) => {
    const weatherCollection = await getWeather(city)

    flushMainContainer()
    // call the today weather view
    todayWeather(weatherCollection.today)
}