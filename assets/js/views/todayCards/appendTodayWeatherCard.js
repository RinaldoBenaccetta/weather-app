import { APPLICATION } from "../../models/application.js"
import { todayWeatherTemplate } from "./todayWeatherTemplate.js"
import { templateElement } from "../templateElement.js"

/**
 * Add a card in main DOM element.
 * The card is templated according to MainCardTemplate.
 * 
 * @param {Object} data 
 * @param {Integer|String} id 
 */
export const appendTodayWeatherCard = (data, id) => {
    const element = templateElement(todayWeatherTemplate(data, id))
    const container = APPLICATION.id.main.cards.container
    const parent = document.querySelector(container)

    parent.appendChild(element)
}