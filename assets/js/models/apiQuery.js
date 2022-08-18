import { request } from "./request.js"

/**
 * Get the weather from API according to the coordinates in jon format.
 * 
 * @param {Float} lat - The latitude
 * @param {Float} lon - The longitude
 * @returns {Object} 
 */
export const apiQuery = async (lat, lon) => {
    try {
        const response = await fetch(request(lat, lon))
        const jsonResponse = await response.json()

        return jsonResponse

    } catch (error) {
        console.error(error)
        return false
    }
}