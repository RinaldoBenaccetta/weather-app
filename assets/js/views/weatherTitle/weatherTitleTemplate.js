// import { APPLICATION } from "../../models/application.js"

/**
 * Returns a string containing the HTML of a weather in, populated with provided datas.
 * 
 * @param {String} city
 * @returns {String}
 */
export const weatherTitleTemplate = (city) => {

    return `<div class="main__localisation__container"> <div class="main__localisation__start">Weather in </div><div class="main__localisation__city">${city}</div></div>`
}