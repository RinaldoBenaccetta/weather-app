import {cityWeatherRequestByCoordinates, cityWeatherRequestByName} from "../request.js"

import { Location } from "../../types/location"
import { WeatherApiResponse} from "../../types/weatherApiResponse"

/**
 * Get the weather from API in jon format according to the location provided.
 * The location can be an object with a city name or latitude, longitude. If both provided,
 * the city name prevails.
 * If response code returned by API is not 200 or if there is an error,
 * return false.
 *
 * @param {Object} location
 * @returns {Object|false}
 */
export const weatherQuery = async (location: Location): Promise<WeatherApiResponse | false> => {
    let response

    try {
        if ("city" in location) {
            response = await fetch(cityWeatherRequestByName(location.city))
        } else if ("lat" in location && "long" in location) {
            response = await fetch(cityWeatherRequestByCoordinates(location.lat, location.long))
        } else {
            return false
        }

        return response.status === 200 ? response.json() : false

    } catch (error) {
        return false
    }
}
