import { apiQuery } from "./apiQuery.js"
import { parseResponse } from "./parseResponse.js";

/**
 * Query the distant API for Weather and return it parsed
 * ready to be used by view templates.
 * 
 * @param {Float} lat - The latitude
 * @param {Float} lon - The longitude
 * @returns {Object}
 */
export const getWeather = async (lat, lon) => {
    const response = await apiQuery(lat, lon)

    if (response) {
        const list = response.list
        const city = response.city
        const parsedCollection = parseResponse(list, city)
        const todayArray = todayWeather(parsedCollection)

        return {
            today: todayArray,
            all: parsedCollection
        }
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
