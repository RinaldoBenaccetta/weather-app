import { APPLICATION } from "../../models/application.js"
import { weatherTitleTemplate } from "./weatherTitleTemplate.js"
import { templateElement } from "../templateElement.js"

/**
 * Add weather in in main DOM element.
 * It is templated according to weatherInTemplate
 * and placed in DOM just before cards.
 * 
 * @param {String} city
 */
export const showWeatherTitle = (city) => {
    const titleElement = templateElement(weatherTitleTemplate(city))
    const parentContainerId = APPLICATION.id.main.localisation
    const parentElement = document.querySelector(parentContainerId)

    parentElement.appendChild(titleElement)
}