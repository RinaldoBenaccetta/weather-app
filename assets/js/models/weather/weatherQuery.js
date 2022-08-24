import { cityWeatherRequest } from "../request.js"

/**
 * Get the weather from API in jon format according to the city provided.
 * If response code retuned by API is not 200 or if there is an error,
 * return false.
 * 
 * @param {String} city
 * @returns {Object|False} 
 */
export const weatherQuery = async (city) => {
    try {
        const response = await fetch(cityWeatherRequest(city))

        return response.status === 200 ? response.json() : false

    } catch (error) {
        return false
    }
}