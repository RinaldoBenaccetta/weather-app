import { apiQuery } from "./apiQuery.js"
import { parseResponse } from "./parseResponse.js";

/**
 * Query the distant API for Weather and return it parsed ready to be used by views.
 * 
 * @param {Float} lat - The latitude
 * @param {Float} lon - The longitude
 * @returns {Array}
 */
export const getTodayWeather = async (lat, lon) => {
    const response = await apiQuery(lat, lon)

    if (response) {
        // Get the 8 first object :
        // each object represent 3 hours, so 8 * 3 = 24 hours
        const todayArray = response.list.slice(0, 8)
        const city = response.city

        return parseResponse(todayArray, city)
    }
}
