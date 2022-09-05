import { APPLICATION } from "./application.js"

/**
 * Return the weather request by city ready to send to the API.
 * 
 * @param {String} city
 * @returns {String}
 */
export const cityWeatherRequest = (city) => `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APPLICATION.externalApi.key}&units=${APPLICATION.units}`

// lat/long version
// export const request = (lat, lon) => `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APPLICATION.externalApi.key}&units=${APPLICATION.units}`

/**
 * Return the autocomplete request ready to send to the API.
 * 
 * @param {String} string
 * @returns {String}
 */
export const autocompleteRequest = (string) => `https://api.teleport.org/api/cities/?search=${string}`
