import { formatHour } from "../utils/formatHour.js"
import { formatTemp } from "../utils/formatTemp.js"

/**
 * Returns a collection of object ready to be used by views.
 * 
 * @param {Array} collection 
 * @param {Object} city 
 * @returns {Array}
 */
export const parseResponse = (collection, city) => {
    const formatedArray = collection.map((day) => {
        return {
            hour: formatHour((day.dt - city.timezone) * 1000),
            // provided by API timestamp is in unix
            icon: '',
            state: day.weather[0].description,
            temp: formatTemp(day.main.temp),
            feel: formatTemp(day.main.feels_like),
        }
    })

    return formatedArray
}