import { APPLICATION } from "../models/application.js"
import { getWeather } from "../models/getWeather.js"
import { todayWeather } from "../views/todayWeather.js"
import { flushCardsContainer } from "../views/flushCardsContainer.js"
import { flushWeatherIn } from "../views/flushWeatherIn.js"
import { classTimeout } from "../utils/classTimeout.js"
import { weatherIn } from "../views/weatherIn.js"
import { removeAutocomplete } from "../utils/removeAutocomplete.js"

/**
 * Get weather for next 24hours according to provided city
 * and show them in the DOM.
 * 
 * @param {String} city
 */
export const weatherController = async (city) => {
    const weatherCollection = await getWeather(city)

    weatherCollection ? WeatherReturn(weatherCollection, city) : WeatherReturnError()
}

/**
 * Show the weather and selected city in DOM.
 * @param {Array} weatherCollection 
 * @param {String} city 
 */
const WeatherReturn = (weatherCollection, city) => {
    flushWeatherIn()
    flushCardsContainer()
    // call the weather in view
    weatherIn(city)
    // call the today weather view
    todayWeather(weatherCollection.today)
}

/**
 * Add an error class to the search input when API send an error.
 */
const WeatherReturnError = () => {
    const errorClass = APPLICATION.class.error
    const inputElement = APPLICATION.id.header.searchContainer.container
    const timer = APPLICATION.errorTimeout

    removeAutocomplete()
    classTimeout(errorClass, inputElement, timer)
}