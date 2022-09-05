import { autocompleteRequest } from "../request.js"

/**
 * Query API according to the provided string.
 * Return raw response from qury.
 * 
 * @param {String} string
 * @returns {Object|False} 
 */
export const autocompleteQuery = async (string) => {
    try {
        const response = await fetch(autocompleteRequest(string))
        const jsonResponse = await response.json()

        return jsonResponse

    } catch (error) {
        return false
    }
}