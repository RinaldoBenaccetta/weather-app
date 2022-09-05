import { appendTodayWeatherCard } from "./appendTodayWeatherCard.js"
import { formatId } from "../../utils/formatId.js"
import { removeTodayWeatherContent } from "./removeTodayWeatherContent.js"

/**
 * Show cards in DOM, each card represent 3 hours of prediction.
 * 
 * @param {Array} weatherCollection
 */
export const showTodayWeather = (weatherCollection) => {
    // empty container before add new cards
    removeTodayWeatherContent()

    buildTodayWeatherCards(weatherCollection)
}

/**
 * Build and append all cards in today weather container.
 * @param {Array} weatherCollection 
 */
const buildTodayWeatherCards = (weatherCollection) => {
    weatherCollection.forEach((time, index) => {
        appendTodayWeatherCard(time, formatId(index, 2))
    });
}