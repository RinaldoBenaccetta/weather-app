/**
 * Return provided number to a provided digits String.
 * Eg. : 42 become 0042 with 4 digits length
 *
 * @param {Number} id
 * @param {Number} digitLength
 * @returns {String}
 */
export const formatId = (id: number, digitLength: number): string => {
    // convert number to string
    let stringId: string = id.toString()
    // format to x digits
    while (stringId.length < digitLength) stringId = "0" + stringId

    return stringId
};
