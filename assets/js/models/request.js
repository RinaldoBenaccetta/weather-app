import { APPLICATION } from "./application.js"

/**
 * Return the request ready to send to the API.
 * 
 * @param {Float} lat - The latitue
 * @param {Float} lon - The longitude
 * @returns {String}
 */
export const request = (lat, lon) => `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APPLICATION.externalApi.key}&units=${APPLICATION.units}`
