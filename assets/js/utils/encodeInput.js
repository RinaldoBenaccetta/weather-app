/**
 * Encode input so no code can be injected by user.
 * 
 * @param {String} string 
 * @returns {String}
 */
export const encodeInput = string => encodeURIComponent(string)