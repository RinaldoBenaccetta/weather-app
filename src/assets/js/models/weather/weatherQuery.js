import {cityWeatherRequestByCoordinates, cityWeatherRequestByName} from "../request.js"

/**
 * Get the weather from API in jon format according to the location provided.
 * The location can be an object with a city name or latitude, longitude. If both provided,
 * the city name prevails.
 * If response code retuned by API is not 200 or if there is an error,
 * return false.
 *
 * @param {Object} location
 * @returns {Object|false}
 */
export const weatherQuery = async (location) => {
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
