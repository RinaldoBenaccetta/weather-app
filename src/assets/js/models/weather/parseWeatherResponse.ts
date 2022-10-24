import {formatHour} from "../../utils/formatHour.js"
import {formatTemp} from "../../utils/formatTemp.js"
import {formatIcon} from "../../utils/formatIcon.js"
import {APPLICATION} from "../application.js";

import { WeatherApiSlice } from "../../types/weatherApiResponse.js"
import { WeatherApiInCity } from "../../types/weatherApiResponse.js"

type ParsedWeather = {
    hour: string,
    icon: string,
    state: string,
    temp: string,
    feel: string
}

/**
 * Returns a collection of object ready to be used by views.
 *
 * @param {Array} collection
 * @param {Object} cityObject
 * @returns {Array}
 */
export const parseWeatherResponse = (collection: WeatherApiSlice[], cityObject: WeatherApiInCity): ParsedWeather[] => {
    const iconList = APPLICATION.class.icons.weather

    return collection.map((day: WeatherApiSlice) => {
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
