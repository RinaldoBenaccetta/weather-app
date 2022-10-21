import { CitySearchResult } from "../../types/citiesApiResponse.js";

/**
 * Return an Array with matching full names of cities.
 *
 * @param {Array} collection
 * @returns {Array}
 */
export const parseAutocompleteResponse = (collection: CitySearchResult[]) => {
    return collection.map((city: CitySearchResult) => city.matching_full_name)
}
