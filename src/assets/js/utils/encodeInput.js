/**
 * Encode input so no code can be injected by user.
 * https://benhoyt.com/writings/dont-sanitize-do-escape/
 * 
 * @param {String} string 
 * @returns {String}
 */
export const encodeInput = string => encodeURIComponent(string)