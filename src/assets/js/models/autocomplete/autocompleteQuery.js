import {autocompleteRequest} from "../request.js"

/**
 * Query API according to the provided string.
 * Return raw response from query.
 *
 * @param {String} string
 * @returns {Object|false}
 */
export const autocompleteQuery = async (string) => {
    try {
        const response = await fetch(autocompleteRequest(string))
        return await response.json()

    } catch (error) {
        return false
    }
}
