import { request } from "./request.js"

/**
 * Get the weather from API according to the coordinates in jon format.
 * 
 * @param {String} city
 * @returns {Object} 
 */
export const apiQuery = async (city) => {
    try {
        const response = await fetch(request(city))
        const jsonResponse = await response.json()

        return jsonResponse

    } catch (error) {
        console.error(error)
        return false
    }
}