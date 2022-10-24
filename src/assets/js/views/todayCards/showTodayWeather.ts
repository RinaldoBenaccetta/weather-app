import { appendTodayWeatherCard } from "./appendTodayWeatherCard.js"
import { formatId } from "../../utils/formatId.js"
import { ParsedWeatherSlice } from "../../types/weatherCollection";
import {removeElementContent} from "../../utils/removeElementContent";
import {ELEMENTS} from "../../models/elements";

/**
 * Show cards in DOM, each card represent 3 hours of prediction.
 *
 * @param {Array} weatherCollection
 */
export const showTodayWeather = (weatherCollection: ParsedWeatherSlice[]): void => {
    // empty container before add new cards
    removeElementContent(ELEMENTS.todayCardsContainer)

    buildTodayWeatherCards(weatherCollection)
}

/**
 * Build and append all cards in today weather container.
 * @param {Array} weatherCollection
 */
const buildTodayWeatherCards = (weatherCollection: ParsedWeatherSlice[]) => {
    weatherCollection.forEach((time: ParsedWeatherSlice, index:number) => {
        appendTodayWeatherCard(time, formatId(index, 2))
    });
}
