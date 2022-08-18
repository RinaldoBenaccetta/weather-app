import { apiRequest } from "./apiRequest.js"

export const apiQuery = async (lat, lon) => {
    try {
        const response = await apiRequest(lat, lon)
        const jsonResponse = await response.json()

        return jsonResponse

    } catch (error) {
        console.error(error)
    }
}