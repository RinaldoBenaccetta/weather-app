import {formatHour} from "../../utils/formatHour.js"
import {formatTemp} from "../../utils/formatTemp.js"
import {pickIconName} from "../../utils/pickIconName.js"
import {APPLICATION} from "../application.js";

import { WeatherApiSlice } from "../../types/weatherApiResponse.js"
import { WeatherApiInCity } from "../../types/weatherApiResponse.js"
import { ParsedWeatherSlice } from "../../types/weatherCollection";

/**
 * Returns a collection of object ready to be used by views.
 *
 * @param {Array} collection
 * @param {Object} cityObject
 * @returns {Array}
 */
export const parseWeatherResponse = (collection: WeatherApiSlice[], cityObject: WeatherApiInCity): ParsedWeatherSlice[] => {
    const iconList: string[][] = APPLICATION.class.icons.weather

    return collection.map((day: WeatherApiSlice) => {
        return {
            // provided by API timestamp is in UNIX
            hour: formatHour((day.dt - cityObject.timezone) * 1000),
            icon: pickIconName(day.weather[0].icon, iconList),
            state: day.weather[0].description,
            temp: formatTemp(day.main.temp),
            feel: formatTemp(day.main.feels_like),
        }
    })
}
