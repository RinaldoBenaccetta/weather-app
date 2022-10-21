import { autocompleteQuery } from "./autocompleteQuery.js"
import { parseAutocompleteResponse } from "./parseAutocompleteResponse.js"

/**
 * Query API for a collection of cities matching the provided string,
 * parse the result to return only full names of matching cities.
 *
 * Before the query, this function remove spaces at start and
 * end of the provided string for prevent
 * to get a giant list of town if we do an API request
 * with only space.
 *
 * If autocomplete list is empty : return False
 *
 * @param {String} string
 * @returns {Array|false}
 */
export const getAutocompleteList = (string: string): Promise<Promise<Array<any>> | false> | false => {
    string = string.trim()

    return string ? processAutocompleteQuery(string) : false
}

/**
 * Query the API that provide cities names according
 * to the string passed and parse the result
 * to return an array with only cities names.
 *
 * @param {String} string
 * @returns {Array}
 */
const processAutocompleteQuery = async (string: string): Promise<Promise<Array<any>> | false> => {
    const response = await autocompleteQuery(string)

    if (response) {
        const autocompleteCollection = response._embedded["city:search-results"]

        return parseAutocompleteResponse(autocompleteCollection)
    } else {
        return false
    }
}
