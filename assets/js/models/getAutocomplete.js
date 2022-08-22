import { autocompleteQuery } from "./autocompleteQuery.js"
import { parseAutocompleteResponse } from "./parseAutocompleteResponse.js";

/**
 * Query API fro a collection of cities matching the provide string,
 * parse the result to return only full names of matching cities.
 * 
 * @param {String} string 
 * @returns 
 */
export const getAutocomplete = async (string) => {
    const response = await autocompleteQuery(string)

    if (response) {
        const autocompleteCollection = response._embedded["city:search-results"]

        const parsedCollection = parseAutocompleteResponse(autocompleteCollection)

        return parsedCollection

    } else {
        return false
    }
}