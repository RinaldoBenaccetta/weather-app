import { todayWeatherTemplate } from "./todayWeatherTemplate.js"
import { templateElement } from "../templateElement.js"
import { ELEMENTS } from "../../models/elements.js";
import { ParsedWeatherSlice } from "../../types/weatherCollection";

/**
 * Add a card in main DOM element.
 * The card is templated according to MainCardTemplate.
 *
 * @param {Object} data
 * @param {Number|String} id
 */
export const appendTodayWeatherCard = (data: ParsedWeatherSlice, id: number | string) => {
    const element = templateElement(todayWeatherTemplate(data, id)) as HTMLDivElement

    ELEMENTS.todayCardsContainer.appendChild(element)
}
