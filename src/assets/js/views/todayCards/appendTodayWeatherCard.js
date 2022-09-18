import { todayWeatherTemplate } from "./todayWeatherTemplate.js"
import { templateElement } from "../templateElement.js"
import { ELEMENTS } from "../../models/elements.js";

/**
 * Add a card in main DOM element.
 * The card is templated according to MainCardTemplate.
 *
 * @param {Object} data
 * @param {Number|String} id
 */
export const appendTodayWeatherCard = (data, id) => {
    const element = templateElement(todayWeatherTemplate(data, id))

    ELEMENTS.todayCardsContainer.appendChild(element)
}
