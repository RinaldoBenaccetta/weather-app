import { weatherQuery } from "./weatherQuery.js"
import { parseWeatherResponse } from "./parseWeatherResponse.js"
import { APPLICATION } from "../application.js"

import { Location } from "../../types/location"
import { WeatherCollection} from "../../types/weatherCollection"
import { WeatherApiResponse} from "../../types/weatherApiResponse"

/**
 * Query the distant API for Weather and return it parsed
 * ready to be used by view templates.
 *
 * @param {Object} location
 * @returns {Object}
 */
export const getWeather = async (location: Location): Promise<Promise<WeatherCollection> | false> => {
    const response: WeatherApiResponse|false = await weatherQuery(location)

    if (response) {
        const weatherCollection = response.list
        const cityObject = response.city
        const parsedCollection = parseWeatherResponse(weatherCollection, cityObject)
        const todayCollection = todayWeather(parsedCollection)

        return {
            today: todayCollection,
            all: parsedCollection,
            city: cityObject.name,
        } as WeatherCollection
    } else {
        return false
    }
}

/**
 * Returns a collection representing 24 hours of prediction
 * by slice of 3 hours, so an array of 8 objects.
 *
 * @param {Array} collection
 * @returns {Array}
 */
const todayWeather = (collection: string|number[])=> collection.slice(0, APPLICATION.todayCardsCount)
