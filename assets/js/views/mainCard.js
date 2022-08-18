import { APPLICATION } from "../models/application.js"
import { mainCardTemplate } from "./mainCardTemplate.js"
import { templateElement } from "./templateElement.js"

/**
 * Add a card in main DOM element.
 * The card is templated according to MainCardTemplate.
 * 
 * @param {Object} data 
 * @param {Integer|String} id 
 */
export const mainCard = (data, id) => {
    const element = templateElement(mainCardTemplate(data, id))
    const container = APPLICATION.element.mainContainer

    container.appendChild(element)
}