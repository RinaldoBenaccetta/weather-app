import {formatHour} from "../../utils/formatHour.js"
import {formatTemp} from "../../utils/formatTemp.js"
import {formatIcon} from "../../utils/formatIcon.js"
import {APPLICATION} from "../application.js";

import { WeatherSlice } from "../../types/weatherApiResponse.js"
import { WeatherInCity } from "../../types/weatherApiResponse.js"

/**
 * Returns a collection of object ready to be used by views.
 *
 * @param {Array} collection
 * @param {Object} cityObject
 * @returns {Array}
 */
export const parseWeatherResponse = (collection: WeatherSlice[], cityObject: WeatherInCity) => {
    const iconList = APPLICATION.class.icons.weather

    return collection.map((day: WeatherSlice) => {
        return {
            // provided by API timestamp is in UNIX
            hour: formatHour((day.dt - cityObject.timezone) * 1000),
            icon: formatIcon(day.weather[0].icon, iconList),
            state: day.weather[0].description,
            temp: formatTemp(day.main.temp),
            feel: formatTemp(day.main.feels_like),
        }
    })
}
