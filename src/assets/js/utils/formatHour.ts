/**
 * Returns formatted string hour from date string.
 *
 * @param {Number|String} date
 * @returns {String}
 */
export const formatHour = (date: number | string): string => {
    const thisDate: Date = new Date(date)
    const hour: number = thisDate.getHours()

    return `${hour}h`
}
