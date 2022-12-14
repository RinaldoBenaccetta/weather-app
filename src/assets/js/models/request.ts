import { APPLICATION } from "./application.js"

/**
 * Return the weather request by city ready to send to the API.
 *
 * @param {string} city
 * @returns {String}
 */
export const cityWeatherRequestByName = (city: string): string => {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APPLICATION.externalApi.key}&units=${APPLICATION.units}`
}

/**
 * Return the weather request by coordinates ready to send to the API.
 *
 * @param {Number} lat
 * @param {Number} lon
 * @returns {String}
 */
export const cityWeatherRequestByCoordinates = (lat: number, lon: number): string => {
    return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APPLICATION.externalApi.key}&units=${APPLICATION.units}`
}

/**
 * Return the autocomplete request ready to send to the API.
 *
 * @param {String} string
 * @returns {String}
 */
export const autocompleteRequest = (string: string): string => {
    return `https://api.teleport.org/api/cities/?search=${string}`
}
