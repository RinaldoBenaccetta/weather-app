import { apiQuery } from "./apiQuery.js"
import { parseResponse } from "./parseResponse.js";

/**
 * Query the distant API for Weather and return it parsed
 * ready to be used by view templates.
 * 
 * @param {String} city
 * @returns {Object}
 */
export const getWeather = async (city) => {
    const response = await apiQuery(city)

    if (response) {
        const weatherCollection = response.list
        const cityObject = response.city
        console.log(response);
        const parsedCollection = parseResponse(weatherCollection, cityObject)
        const todayCollection = todayWeather(parsedCollection)

        return {
            today: todayCollection,
            all: parsedCollection
        }
    } else {
        return false
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
