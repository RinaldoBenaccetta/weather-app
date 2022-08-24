/**
 * Return an Array with matching full names.
 * 
 * @param {Array} collection 
 * @returns {Array}
 */
export const parseAutocompleteResponse = (collection) => {
    const formatedArray = collection.map((city) => city.matching_full_name)

    return formatedArray

}