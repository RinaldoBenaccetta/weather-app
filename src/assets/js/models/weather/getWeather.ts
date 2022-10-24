import { weatherQuery } from "./weatherQuery.js"
import { parseWeatherResponse } from "./parseWeatherResponse.js"
import { APPLICATION } from "../application.js"

import { Location } from "../../types/location"
import {WeatherCollection, ParsedWeatherSlice} from "../../types/weatherCollection"
import {WeatherApiResponse, WeatherApiInCity, WeatherApiSlice} from "../../types/weatherApiResponse"

/**
 * Query the distant API for Weather and return it parsed
 * ready to be used by view templates.
 *
 * @param {Object} location
 * @returns {Object}
 */
export const getWeather = async (location: Location): Promise<WeatherCollection | false> => {
    const response: WeatherApiResponse|false = await weatherQuery(location)

    if (response) {
        const weatherCollection: WeatherApiSlice[] = response.list
        const cityObject: WeatherApiInCity = response.city
        const parsedCollection: ParsedWeatherSlice[] = parseWeatherResponse(weatherCollection, cityObject)
        const todayCollection: ParsedWeatherSlice[] = todayWeather(parsedCollection)

        return {
            today: todayCollection,
            all: parsedCollection,
            city: cityObject.name,
        }
    } else {
        return false
    }
}

/**
 * Returns a collection representing 24 hours of prediction
 * by slice of 3 hours, The number of cards is set
 * in settings at Application.todayCardsCount
 *
 * @param {Array} collection
 * @returns {Array}
 */
const todayWeather = (collection: ParsedWeatherSlice[]): ParsedWeatherSlice[] => collection.slice(0, APPLICATION.todayCardsCount)
