import { APPLICATION } from "../models/application.js"

/**
 * Returns a string containing the HTML of a weather in, populated with provided datas.
 * 
 * @param {String} city
 * @returns {String}
 */
export const weatherInTemplate = (city) => {
    //const CLASS = APPLICATION.class.main.card
    // const ID = APPLICATION.id.main.localisation

    return `<div class="main__lacalisation__container"> <div class="main__localisation__start">Weather in </div><div class="main__localisation__town">${city}</div></div>`
}