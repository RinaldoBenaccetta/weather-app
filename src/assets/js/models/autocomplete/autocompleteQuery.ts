import {autocompleteRequest} from "../request.js"

import { CitiesApiResponse } from "../../types/citiesApiResponse.js"

/**
 * Query API according to the provided string.
 * Return raw response from query.
 *
 * @param {String} string
 * @returns {Object|false}
 */
export const autocompleteQuery = async (string: string): Promise<Promise<CitiesApiResponse> | false> => {
    try {
        const response = await fetch(autocompleteRequest(string))
        return await response.json()

    } catch (error) {
        return false
    }
}
