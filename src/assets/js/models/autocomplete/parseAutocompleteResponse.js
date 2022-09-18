/**
 * Return an Array with matching full names of cities.
 *
 * @param {Array} collection
 * @returns {Array}
 */
export const parseAutocompleteResponse = (collection) => {
    return collection.map((city) => city.matching_full_name)

}
