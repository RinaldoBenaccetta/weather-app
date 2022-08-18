import { apiQuery } from "./apiQuery.js"
import { parseResponse } from "./parseResponse.js";

/**
 * Query the distant API for Weather and return it parsed ready to be used by views.
 * 
 * @param {Float} lat - The latitude
 * @param {Float} lon - The longitude
 * @returns {Array}
 */
export const getWeather = async (lat, lon) => {
    const response = await apiQuery(lat, lon)

    if (response) {
        const todayArray = todayWeather(response.list)
        const city = response.city

        return parseResponse(todayArray, city)
    }
}

/**
 * Returns a collection representing 24 hours of prediction
 * by slice of 3 hours, so an array of 8 objects.
 * 
 * @param {Array} collection 
 * @returns {Array}
 */
const todayWeather = collection => collection.slice(0, 8)
