import { formatHour } from "../utils/formatHour.js"
import { formatTemp } from "../utils/formatTemp.js"
import { formatIcon } from "../utils/formatIcon.js";

/**
 * Returns a collection of object ready to be used by views.
 * 
 * @param {Array} collection 
 * @param {Object} cityObject 
 * @returns {Array}
 */
export const parseResponse = (collection, cityObject) => {
    const formatedArray = collection.map((day) => {
        return {
            // provided by API timestamp is in unix
            hour: formatHour((day.dt - cityObject.timezone) * 1000),
            icon: formatIcon(day.weather[0].icon),
            state: day.weather[0].description,
            temp: formatTemp(day.main.temp),
            feel: formatTemp(day.main.feels_like),
        }
    })

    return formatedArray
}