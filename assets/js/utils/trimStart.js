/**
 * Return the provided string less the white spaces at start.
 * 
 * @param {String} string 
 * @returns {String}
 */
export const trimStart = (string) => {
    return !string ? string : string.replace(/^\s+|\s+$/g, '')
}