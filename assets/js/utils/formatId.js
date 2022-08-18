/**
 * Return provided number to a provided digits String.
 * Eg. : 42 become 0042 with 4 digits length
 * 
 * @param {Integer} id 
 * @returns {String}
 */
export const formatId = (id, digitLength) => {
    // convert integer to string
    id = id.toString()
    // format to x digits
    while (id.length < digitLength) id = "0" + id

    return id
};