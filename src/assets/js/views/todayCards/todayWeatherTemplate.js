import { APPLICATION } from "../../models/application.js"

/**
 * Returns a string containing the HTML of a card, populated with provided datas.
 * 
 * @param {Object} data 
 * @param {String} id 
 * @returns {String}
 */
export const todayWeatherTemplate = (data, id) => {
    const CLASS = APPLICATION.class.main.card
    const ID = APPLICATION.id.main.cards.card

    return `<div class="${CLASS.container}" id="${ID.container}-${id}">
                <div class="${CLASS.hour}" id="${ID.hour}-${id}">${data.hour}</div>
                <div class="${CLASS.icon} ${data.icon}" id="${ID.icon}-${id}"></div>
                <div class="${CLASS.state}" id="${ID.state}-${id}">${data.state}</div>
                <div class="${CLASS.temp}" id="${ID.temp}-${id}">${data.temp}</div>
                <div class="${CLASS.feelLabel}">feel</div>
                <div class="${CLASS.feel}" id="${ID.feel}-${id}">${data.feel}</div>
            </div>`
}