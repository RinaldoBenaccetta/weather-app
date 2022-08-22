import { autocompleteQuery } from "./autocompleteQuery.js"
import { parseAutocompleteResponse } from "./parseAutocompleteResponse.js";
import { trimStart } from "../utils/trimStart.js";
// import { encodeInput } from "../utils/encodeInput.js";

/**
 * Query API fro a collection of cities matching the provide string,
 * parse the result to return only full names of matching cities.
 * 
 * Remove spaces at start of the provided string to prevent
 *  to get a giant list of town if we do an API request
 * with only space.
 * 
 * @param {String} string 
 * @returns {Array}
 */
export const getAutocomplete = (string) => {
    // remove spaces at start of the string
    string = trimStart(string)

    return string ? processAutocomplete(string) : false
}

/**
 * Query the API that provide cities names according
 * to the string passed and parse the result
 * to return an array with only cities names.
 * 
 * @param {String} string 
 * @returns {Array}
 */
const processAutocomplete = async (string) => {
    // todo : replacing spaces by %20 make bug API when encode, fix that
    // string = encodeInput(string)

    const response = await autocompleteQuery(string)

    if (response) {
        const autocompleteCollection = response._embedded["city:search-results"]
        const parsedCollection = parseAutocompleteResponse(autocompleteCollection)

        return parsedCollection
    } else {
        return false
    }
}