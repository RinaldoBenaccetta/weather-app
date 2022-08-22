import { cityWeatherRequest } from "./request.js"

/**
 * Get the weather from API according to the coordinates in jon format.
 * If response code retuned by API is not 200 or if there is an error,
 * return false.
 * 
 * @param {String} city
 * @returns {Object|False} 
 */
export const weatherQuery = async (city) => {
    try {
        const response = await fetch(cityWeatherRequest(city))
        const jsonResponse = await response.json()

        return jsonResponse.cod === '200' ? jsonResponse : false

    } catch (error) {
        console.log(error);
        return false
    }
}