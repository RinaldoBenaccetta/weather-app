/**
 * Returns formated string hour from date string.
 * 
 * @param {Number|String} date 
 * @returns {String}
 */
export const formatHour = (date) => {
    const thisDate = new Date(date)
    const hour = thisDate.getHours()

    return `${hour} h`
}