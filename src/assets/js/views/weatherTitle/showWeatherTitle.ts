import { ELEMENTS } from "../../models/elements.js"
import { weatherTitleTemplate } from "../../templates/weatherTitleTemplate.js"
import { templateElement } from "../templateElement.js"

/**
 * Add weather in main DOM element.
 * It is templated according to weatherInTemplate
 * and placed in DOM just before cards.
 *
 * @param {String} city
 */
export const showWeatherTitle = (city: string): void => {
    const titleElement: Node = templateElement(weatherTitleTemplate(city))

    ELEMENTS.weatherTitleContainer.appendChild(titleElement)
}
