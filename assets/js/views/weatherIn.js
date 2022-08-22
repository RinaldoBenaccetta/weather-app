import { APPLICATION } from "../models/application.js"
import { weatherInTemplate } from "./weatherInTemplate.js"
import { templateElement } from "./templateElement.js"

/**
 * Add weather in in main DOM element.
 * It is templated according to weatherInTemplate
 * and placed in DOM just before cards.
 * 
 * @param {String} city
 */
export const weatherIn = (city) => {
    const element = templateElement(weatherInTemplate(city))
    const container = APPLICATION.id.main.container
    const parent = document.querySelector(container)
    const cardsContainer = APPLICATION.id.main.cards.container
    const cards = document.querySelector(cardsContainer)

    parent.insertBefore(element, cards)
}